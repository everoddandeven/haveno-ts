import XMLHttpNodeRequest, { XMLHttpNodeRequestEventTarget, XMLHttpNodeRequestUpload, ProgressEvent, checkXMLHttpSupport } from "./utils/XMLHttpNodeRequest";

if (!checkXMLHttpSupport()) {
    //@ts-ignore
    global.ProgressEvent = ProgressEvent;
    //@ts-ignore
    global.XMLHttpRequestEventTarget = XMLHttpNodeRequestEventTarget;
    //@ts-ignore
    global.XMLHttpRequestUpload = XMLHttpNodeRequestUpload;
    //@ts-ignore
    global.XMLHttpRequest = XMLHttpNodeRequest;
}

import HavenoClient from "./HavenoClient";
import HavenoError from "./types/HavenoError";
import HavenoUtils from "./utils/HavenoUtils";

export { HavenoClient };
export { HavenoError };
export { HavenoUtils };
export * from "./protobuf/grpc_pb";
export * from "./protobuf/pb_pb";
