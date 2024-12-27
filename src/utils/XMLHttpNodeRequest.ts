import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';

class InvalidStateError extends Error {
    constructor(message?: string) {
        super(message);
    }
}

interface ProgressEventInit extends EventInit {
    lengthComputable: boolean;
    loaded: number;
    total: number;
}

export class ProgressEvent<Target extends EventTarget = EventTarget> extends Event {
    private _target: Target | null = null;

    lenghtComputable: boolean = false;
    loaded: number = 0;
    total: number = 0;

    public get target(): Target | null {
        return this._target;
    }

    public set target(value: Target | null) {
        this._target = value;
    }

    constructor(type: string, options?: ProgressEventInit) {
        super(type, options);

        if (options) {
            this.lenghtComputable = options.lengthComputable;
            this.loaded = options.loaded;
            this.total = options.total;
        }
    }
}

type EventHandler<TEvent extends Event = Event> = (this: XMLHttpNodeRequest, ev: TEvent) => any;
type ProgressEventHandler<Target extends EventTarget = EventTarget> = EventHandler<ProgressEvent<Target>>;

export class XMLHttpNodeRequestEventTarget {

    private _eventListeners: Record<string, EventListenerOrEventListenerObject[]> = {};

    // Event Handlers
    onabort: ProgressEventHandler | null = null;
    onerror: ProgressEventHandler | null = null;
    onload: ProgressEventHandler | null = null;
    onloadend: ProgressEventHandler | null = null;
    onloadstart: ProgressEventHandler | null = null;
    onprogress: ProgressEventHandler | null = null;
    ontimeout: ProgressEventHandler | null = null;

    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void {
        if (!this._eventListeners[type]) {
            this._eventListeners[type] = [];
        }
        this._eventListeners[type].push(listener);
    }

    removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void {
        if (!this._eventListeners[type]) return;
        this._eventListeners[type] = this._eventListeners[type].filter(l => l !== listener);
    }

    dispatchEvent(event: Event): boolean {
        if (!this._eventListeners[event.type]) return true;
        for (const listener of this._eventListeners[event.type]) {
            if (typeof listener === 'function') {
                listener(event);
            } else {
                listener.handleEvent(event);
            }
        }
        return !event.defaultPrevented || !event.cancelable;
    }
}

export class XMLHttpNodeRequestUpload extends XMLHttpNodeRequestEventTarget {

}

export function checkXMLHttpSupport(): boolean {
    try {
        new XMLHttpRequest();
        return true;
    }
    catch {
        return false;
    }
}

export default class XMLHttpNodeRequest extends XMLHttpNodeRequestEventTarget {
    // XMLHttpRequest readyState constants
    static readonly UNSENT: 0 = 0;
    static readonly OPENED: 1 = 1;
    static readonly HEADERS_RECEIVED: 2 = 2;
    static readonly LOADING: 3 = 3;
    static readonly DONE: 4 = 4;

    readonly UNSENT: 0 = 0;
    readonly OPENED: 1 = 1;
    readonly HEADERS_RECEIVED: 2 = 2;
    readonly LOADING: 3 = 3;
    readonly DONE: 4 = 4;

    private _headers: Record<string, string> = {};
    private _responseHeaders?: Record<string, string>;
    private _method: string = 'GET';
    private _url: string = '';
    private _async: boolean = true;
    private _cancelTokenSource?: Canceler;

    onreadystatechange: EventHandler | null = null;
    
    readyState: number = this.UNSENT;
    response: any = null;
    responseText: string = '';
    responseType: XMLHttpRequestResponseType = '';
    responseURL: string = '';
    responseXML: Document | null = null;
    status: number = 0;
    statusText: string = '';
    timeout: number = 0;
    upload: XMLHttpNodeRequestUpload = new XMLHttpNodeRequestUpload();
    withCredentials: boolean = false;

    abort(): void {
        if (this._cancelTokenSource && this.readyState === this.LOADING) {
            this._cancelTokenSource();
            this.readyState = this.UNSENT;
            this._triggerReadyStateChange();

            if (this.onabort) {
                this.onabort(new ProgressEvent('abort'));
            }
            if (this.onloadend) {
                this.onloadend(new ProgressEvent('loadend'));
            }
        }
    }

    getAllResponseHeaders(): string | null {
        if (!this._responseHeaders) return null;
        return Object.entries(this._responseHeaders)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\r\n');
    }

    getResponseHeader(name: string): string | null {
        if (!this._responseHeaders) return null;
        return this._responseHeaders[name.toLowerCase()] || null;
    }

    open(method: string, url: string, async: boolean = true, username?: string, password?: string): void {
        this._method = method;
        this._url = url;
        this._async = async;
        this.readyState = this.OPENED;
        this._triggerReadyStateChange();
    }

    overrideMimeType(mime: string): void {
        this.setRequestHeader('Content-Type', mime);
    }

    send(body?: Document | XMLHttpRequestBodyInit | null): void {
        this._assertOpened();
        const CancelToken = axios.CancelToken;
        const cancelTokenSource = CancelToken.source();
        this._cancelTokenSource = cancelTokenSource.cancel;

        const config: AxiosRequestConfig = {
            method: this._method,
            url: this._url,
            headers: this._headers,
            data: body || null,
            timeout: this.timeout,
            withCredentials: this.withCredentials,
            cancelToken: cancelTokenSource.token,
            onDownloadProgress: (progressEvent) => {
                const event = new ProgressEvent('progress', {
                    lengthComputable: progressEvent.lengthComputable,
                    loaded: progressEvent.loaded,
                    total: progressEvent.total ? progressEvent.total : 0,
                });
              
                this.upload.dispatchEvent(event);

                if (this.onprogress) {
                    this.onprogress(event);
                }
            },
        };

        this.readyState = this.LOADING;
        this._triggerReadyStateChange();

        axios(config)
            .then((response: AxiosResponse) => this._handleResponse(response))
            .catch((error: any) => this._handleError(error));
    }

    setRequestHeader(name: string, value: string): void {
        this._assertOpened();
        this._headers[name.toLowerCase()] = value;
    }

    private _assertOpened(): void {
        if (this.readyState !== this.OPENED) {
            throw new InvalidStateError("You must open the request");
        }
    }

    private _handleResponse(response: AxiosResponse): void {
        try {
            const responseHeaders: { [key: string]: any } = {};
            Object.entries(response.headers).map(([key, value]) => responseHeaders[key] = value );
            this._responseHeaders = responseHeaders;
    
            this.readyState = this.HEADERS_RECEIVED;
            this._triggerReadyStateChange();
    
            this.readyState = this.DONE;
            this._cancelTokenSource = undefined;
            this.status = response.status;
            this.statusText = response.statusText;
            this.response = response.data;
            this.responseText = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
            this.responseURL = response.config.url || '';
            this._triggerReadyStateChange();
    
            if (this.onloadstart) {
                this.onloadstart(new ProgressEvent('loadstart'));
            }
            // transaction completed successfully
            if (this.onload) {
                this.onload(new ProgressEvent('load'));
            }
            if (this.onloadend) {
                this.onloadend(new ProgressEvent('loadend'));
            }
        }
        catch (error: any) {
            this._handleError(error);
        }
    }

    private _handleError(error: any): void {
        this._responseHeaders = undefined;
        if (axios.isCancel(error)) {
            this.readyState = this.UNSENT;

            if (this.onabort) {
                this.onabort(new ProgressEvent('abort'));
            }
            if (this.onloadend) {
                this.onloadend(new ProgressEvent('loadend'));
            }

            this._triggerReadyStateChange();
        } else {
            this.readyState = this.DONE;

            this.status = error.response?.status || 0;
            this.statusText = error.message || 'Error';
            this.response = error.response?.data || null;
            this._triggerReadyStateChange();
    
            if (error.code === 'ECONNABORTED') {
                if (this.ontimeout) {
                    this.ontimeout(new ProgressEvent('timeout'));
                }
            }
    
            if (this.onerror) {
                this.onerror(new ProgressEvent('error'));
            }
            if (this.onloadend) {
                this.onloadend(new ProgressEvent('loadend'));
            }
        }
    }

    private _triggerReadyStateChange(): void {
        if (this.onreadystatechange) {
            this.onreadystatechange(new Event('readystatechange'));
        }
    }
}
