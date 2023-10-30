// source: grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var pb_pb = require('./pb_pb.js');
goog.object.extend(proto, pb_pb);
goog.exportSymbol('proto.io.haveno.protobuffer.AccountExistsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.AccountExistsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.AddConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.AddConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.AddressBalanceInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.AvailabilityResultWithDescription', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.BackupAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.BackupAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.BalancesInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.BtcBalanceInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CancelOfferReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CancelOfferRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ChangePasswordReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ChangePasswordRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CheckConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CheckConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CheckConnectionsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CheckConnectionsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CloseAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CloseAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CompleteTradeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CompleteTradeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ConfirmPaymentSentReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ConfirmPaymentSentRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ContractInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreatePaymentAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreatePaymentAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateXmrTxReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.CreateXmrTxRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.DeleteAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.DeleteAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetAddressBalanceReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetAddressBalanceRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetBalancesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetBalancesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetBestAvailableConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetChatMessagesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetChatMessagesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetConnectionsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetConnectionsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetDisputeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetDisputeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetDisputesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetDisputesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetFundingAddressesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetFundingAddressesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMethodHelpReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMethodHelpRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMyOfferReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMyOfferRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMyOffersReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetMyOffersRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetOfferReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetOfferRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetOffersReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetOffersRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountFormReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountFormRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentAccountsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentMethodsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetPaymentMethodsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradeStatisticsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradeStatisticsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetTradesRequest.Category', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetVersionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetVersionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrNewSubaddressReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrSeedReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrSeedRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrTxsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.GetXmrTxsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsAccountOpenReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsAccountOpenRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsAppInitializedReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsAppInitializedRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.LockWalletReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.LockWalletRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketDepthInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketDepthReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketDepthRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketPriceInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketPriceReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketPriceRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketPricesReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.MarketPricesRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.NotificationMessage', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.NotificationMessage.NotificationType', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.OfferInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.OpenAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.OpenAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.OpenDisputeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.OpenDisputeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.PostOfferReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.PostOfferRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RegisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RegisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RegisterNotificationListenerRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RelayXmrTxReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RelayXmrTxRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RemoveConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RemoveConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RemoveWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RemoveWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ResolveDisputeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ResolveDisputeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RestoreAccountReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.RestoreAccountRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendBtcRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendChatMessageReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendChatMessageRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendDisputeChatMessageReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendDisputeChatMessageRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendNotificationReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SendNotificationRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetAutoSwitchReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetAutoSwitchRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetConnectionReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetConnectionRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetWalletPasswordReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.SetWalletPasswordRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StartCheckingConnectionsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StartCheckingConnectionsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StartMoneroNodeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StartMoneroNodeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopCheckingConnectionsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopCheckingConnectionsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopMoneroNodeReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopMoneroNodeRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.StopRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.TakeOfferReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.TakeOfferRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.TradeInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UnlockWalletReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UnlockWalletRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UnregisterDisputeAgentReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UrlConnection', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.UrlConnection.OnlineStatus', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ValidateFormFieldReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.ValidateFormFieldRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.WithdrawFundsReply', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.WithdrawFundsRequest', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.XmrBalanceInfo', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.XmrDestination', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.XmrIncomingTransfer', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.XmrOutgoingTransfer', null, global);
goog.exportSymbol('proto.io.haveno.protobuffer.XmrTx', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMethodHelpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMethodHelpRequest.displayName = 'proto.io.haveno.protobuffer.GetMethodHelpRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMethodHelpReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMethodHelpReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMethodHelpReply.displayName = 'proto.io.haveno.protobuffer.GetMethodHelpReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetVersionRequest.displayName = 'proto.io.haveno.protobuffer.GetVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetVersionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetVersionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetVersionReply.displayName = 'proto.io.haveno.protobuffer.GetVersionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AccountExistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AccountExistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AccountExistsRequest.displayName = 'proto.io.haveno.protobuffer.AccountExistsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AccountExistsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AccountExistsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AccountExistsReply.displayName = 'proto.io.haveno.protobuffer.AccountExistsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsAccountOpenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsAccountOpenRequest.displayName = 'proto.io.haveno.protobuffer.IsAccountOpenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsAccountOpenReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsAccountOpenReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsAccountOpenReply.displayName = 'proto.io.haveno.protobuffer.IsAccountOpenReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateAccountRequest.displayName = 'proto.io.haveno.protobuffer.CreateAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateAccountReply.displayName = 'proto.io.haveno.protobuffer.CreateAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.OpenAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.OpenAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.OpenAccountRequest.displayName = 'proto.io.haveno.protobuffer.OpenAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.OpenAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.OpenAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.OpenAccountReply.displayName = 'proto.io.haveno.protobuffer.OpenAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsAppInitializedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsAppInitializedRequest.displayName = 'proto.io.haveno.protobuffer.IsAppInitializedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsAppInitializedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsAppInitializedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsAppInitializedReply.displayName = 'proto.io.haveno.protobuffer.IsAppInitializedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ChangePasswordRequest.displayName = 'proto.io.haveno.protobuffer.ChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ChangePasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ChangePasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ChangePasswordReply.displayName = 'proto.io.haveno.protobuffer.ChangePasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CloseAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CloseAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CloseAccountRequest.displayName = 'proto.io.haveno.protobuffer.CloseAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CloseAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CloseAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CloseAccountReply.displayName = 'proto.io.haveno.protobuffer.CloseAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.DeleteAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.DeleteAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.DeleteAccountRequest.displayName = 'proto.io.haveno.protobuffer.DeleteAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.DeleteAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.DeleteAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.DeleteAccountReply.displayName = 'proto.io.haveno.protobuffer.DeleteAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.BackupAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.BackupAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.BackupAccountRequest.displayName = 'proto.io.haveno.protobuffer.BackupAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.BackupAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.BackupAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.BackupAccountReply.displayName = 'proto.io.haveno.protobuffer.BackupAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RestoreAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RestoreAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RestoreAccountRequest.displayName = 'proto.io.haveno.protobuffer.RestoreAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RestoreAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RestoreAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RestoreAccountReply.displayName = 'proto.io.haveno.protobuffer.RestoreAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetDisputesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetDisputesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetDisputesRequest.displayName = 'proto.io.haveno.protobuffer.GetDisputesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetDisputesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetDisputesReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetDisputesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetDisputesReply.displayName = 'proto.io.haveno.protobuffer.GetDisputesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetDisputeRequest.displayName = 'proto.io.haveno.protobuffer.GetDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetDisputeReply.displayName = 'proto.io.haveno.protobuffer.GetDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.OpenDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.OpenDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.OpenDisputeRequest.displayName = 'proto.io.haveno.protobuffer.OpenDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.OpenDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.OpenDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.OpenDisputeReply.displayName = 'proto.io.haveno.protobuffer.OpenDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ResolveDisputeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ResolveDisputeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ResolveDisputeReply.displayName = 'proto.io.haveno.protobuffer.ResolveDisputeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ResolveDisputeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ResolveDisputeRequest.displayName = 'proto.io.haveno.protobuffer.ResolveDisputeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendDisputeChatMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.displayName = 'proto.io.haveno.protobuffer.SendDisputeChatMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendDisputeChatMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendDisputeChatMessageReply.displayName = 'proto.io.haveno.protobuffer.SendDisputeChatMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RegisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.displayName = 'proto.io.haveno.protobuffer.RegisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RegisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RegisterDisputeAgentReply.displayName = 'proto.io.haveno.protobuffer.RegisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.displayName = 'proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.UnregisterDisputeAgentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.displayName = 'proto.io.haveno.protobuffer.UnregisterDisputeAgentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RegisterNotificationListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.displayName = 'proto.io.haveno.protobuffer.RegisterNotificationListenerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.NotificationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.NotificationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.NotificationMessage.displayName = 'proto.io.haveno.protobuffer.NotificationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendNotificationRequest.displayName = 'proto.io.haveno.protobuffer.SendNotificationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendNotificationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendNotificationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendNotificationReply.displayName = 'proto.io.haveno.protobuffer.SendNotificationReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.UrlConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.UrlConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.UrlConnection.displayName = 'proto.io.haveno.protobuffer.UrlConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AddConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AddConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AddConnectionRequest.displayName = 'proto.io.haveno.protobuffer.AddConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AddConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AddConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AddConnectionReply.displayName = 'proto.io.haveno.protobuffer.AddConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RemoveConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RemoveConnectionRequest.displayName = 'proto.io.haveno.protobuffer.RemoveConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RemoveConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RemoveConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RemoveConnectionReply.displayName = 'proto.io.haveno.protobuffer.RemoveConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetConnectionRequest.displayName = 'proto.io.haveno.protobuffer.GetConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetConnectionReply.displayName = 'proto.io.haveno.protobuffer.GetConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetConnectionsRequest.displayName = 'proto.io.haveno.protobuffer.GetConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetConnectionsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetConnectionsReply.displayName = 'proto.io.haveno.protobuffer.GetConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetConnectionRequest.displayName = 'proto.io.haveno.protobuffer.SetConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetConnectionReply.displayName = 'proto.io.haveno.protobuffer.SetConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CheckConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CheckConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CheckConnectionRequest.displayName = 'proto.io.haveno.protobuffer.CheckConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CheckConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CheckConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CheckConnectionReply.displayName = 'proto.io.haveno.protobuffer.CheckConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CheckConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CheckConnectionsRequest.displayName = 'proto.io.haveno.protobuffer.CheckConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CheckConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.CheckConnectionsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.CheckConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CheckConnectionsReply.displayName = 'proto.io.haveno.protobuffer.CheckConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StartCheckingConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.displayName = 'proto.io.haveno.protobuffer.StartCheckingConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StartCheckingConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StartCheckingConnectionsReply.displayName = 'proto.io.haveno.protobuffer.StartCheckingConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopCheckingConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.displayName = 'proto.io.haveno.protobuffer.StopCheckingConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopCheckingConnectionsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopCheckingConnectionsReply.displayName = 'proto.io.haveno.protobuffer.StopCheckingConnectionsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.displayName = 'proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetBestAvailableConnectionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.displayName = 'proto.io.haveno.protobuffer.GetBestAvailableConnectionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetAutoSwitchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetAutoSwitchRequest.displayName = 'proto.io.haveno.protobuffer.SetAutoSwitchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetAutoSwitchReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetAutoSwitchReply.displayName = 'proto.io.haveno.protobuffer.SetAutoSwitchReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.displayName = 'proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.displayName = 'proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.displayName = 'proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.displayName = 'proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StartMoneroNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StartMoneroNodeRequest.displayName = 'proto.io.haveno.protobuffer.StartMoneroNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StartMoneroNodeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StartMoneroNodeReply.displayName = 'proto.io.haveno.protobuffer.StartMoneroNodeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopMoneroNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopMoneroNodeRequest.displayName = 'proto.io.haveno.protobuffer.StopMoneroNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopMoneroNodeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopMoneroNodeReply.displayName = 'proto.io.haveno.protobuffer.StopMoneroNodeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetOfferRequest.displayName = 'proto.io.haveno.protobuffer.GetOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetOfferReply.displayName = 'proto.io.haveno.protobuffer.GetOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMyOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMyOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMyOfferRequest.displayName = 'proto.io.haveno.protobuffer.GetMyOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMyOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMyOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMyOfferReply.displayName = 'proto.io.haveno.protobuffer.GetMyOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetOffersRequest.displayName = 'proto.io.haveno.protobuffer.GetOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetOffersReply.displayName = 'proto.io.haveno.protobuffer.GetOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMyOffersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMyOffersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMyOffersRequest.displayName = 'proto.io.haveno.protobuffer.GetMyOffersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetMyOffersReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetMyOffersReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetMyOffersReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetMyOffersReply.displayName = 'proto.io.haveno.protobuffer.GetMyOffersReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.PostOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.PostOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.PostOfferRequest.displayName = 'proto.io.haveno.protobuffer.PostOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.PostOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.PostOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.PostOfferReply.displayName = 'proto.io.haveno.protobuffer.PostOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CancelOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CancelOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CancelOfferRequest.displayName = 'proto.io.haveno.protobuffer.CancelOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CancelOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CancelOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CancelOfferReply.displayName = 'proto.io.haveno.protobuffer.CancelOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.OfferInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.OfferInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.OfferInfo.displayName = 'proto.io.haveno.protobuffer.OfferInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AvailabilityResultWithDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AvailabilityResultWithDescription.displayName = 'proto.io.haveno.protobuffer.AvailabilityResultWithDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreatePaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreatePaymentAccountRequest.displayName = 'proto.io.haveno.protobuffer.CreatePaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreatePaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreatePaymentAccountReply.displayName = 'proto.io.haveno.protobuffer.CreatePaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountsRequest.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetPaymentAccountsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountsReply.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentMethodsRequest.displayName = 'proto.io.haveno.protobuffer.GetPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentMethodsReply.displayName = 'proto.io.haveno.protobuffer.GetPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountFormRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountFormRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountFormReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountFormReply.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountFormReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.displayName = 'proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.displayName = 'proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.displayName = 'proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.displayName = 'proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.displayName = 'proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ValidateFormFieldRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ValidateFormFieldRequest.displayName = 'proto.io.haveno.protobuffer.ValidateFormFieldRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ValidateFormFieldReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ValidateFormFieldReply.displayName = 'proto.io.haveno.protobuffer.ValidateFormFieldReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketPriceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketPriceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketPriceRequest.displayName = 'proto.io.haveno.protobuffer.MarketPriceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketPriceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketPriceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketPriceReply.displayName = 'proto.io.haveno.protobuffer.MarketPriceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketPricesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketPricesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketPricesRequest.displayName = 'proto.io.haveno.protobuffer.MarketPricesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketPricesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.MarketPricesReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketPricesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketPricesReply.displayName = 'proto.io.haveno.protobuffer.MarketPricesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketPriceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketPriceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketPriceInfo.displayName = 'proto.io.haveno.protobuffer.MarketPriceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketDepthRequest.displayName = 'proto.io.haveno.protobuffer.MarketDepthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketDepthReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketDepthReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketDepthReply.displayName = 'proto.io.haveno.protobuffer.MarketDepthReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.MarketDepthInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.MarketDepthInfo.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.MarketDepthInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.MarketDepthInfo.displayName = 'proto.io.haveno.protobuffer.MarketDepthInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradeStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradeStatisticsRequest.displayName = 'proto.io.haveno.protobuffer.GetTradeStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetTradeStatisticsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradeStatisticsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradeStatisticsReply.displayName = 'proto.io.haveno.protobuffer.GetTradeStatisticsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopRequest.displayName = 'proto.io.haveno.protobuffer.StopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.StopReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.StopReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.StopReply.displayName = 'proto.io.haveno.protobuffer.StopReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.TakeOfferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.TakeOfferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.TakeOfferRequest.displayName = 'proto.io.haveno.protobuffer.TakeOfferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.TakeOfferReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.TakeOfferReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.TakeOfferReply.displayName = 'proto.io.haveno.protobuffer.TakeOfferReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ConfirmPaymentSentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.displayName = 'proto.io.haveno.protobuffer.ConfirmPaymentSentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ConfirmPaymentSentReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ConfirmPaymentSentReply.displayName = 'proto.io.haveno.protobuffer.ConfirmPaymentSentReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.displayName = 'proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.displayName = 'proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradeRequest.displayName = 'proto.io.haveno.protobuffer.GetTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradeReply.displayName = 'proto.io.haveno.protobuffer.GetTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradesRequest.displayName = 'proto.io.haveno.protobuffer.GetTradesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetTradesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetTradesReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetTradesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetTradesReply.displayName = 'proto.io.haveno.protobuffer.GetTradesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CompleteTradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CompleteTradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CompleteTradeRequest.displayName = 'proto.io.haveno.protobuffer.CompleteTradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CompleteTradeReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CompleteTradeReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CompleteTradeReply.displayName = 'proto.io.haveno.protobuffer.CompleteTradeReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.WithdrawFundsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.WithdrawFundsRequest.displayName = 'proto.io.haveno.protobuffer.WithdrawFundsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.WithdrawFundsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.WithdrawFundsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.WithdrawFundsReply.displayName = 'proto.io.haveno.protobuffer.WithdrawFundsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetChatMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetChatMessagesRequest.displayName = 'proto.io.haveno.protobuffer.GetChatMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetChatMessagesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetChatMessagesReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetChatMessagesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetChatMessagesReply.displayName = 'proto.io.haveno.protobuffer.GetChatMessagesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendChatMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendChatMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendChatMessageRequest.displayName = 'proto.io.haveno.protobuffer.SendChatMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendChatMessageReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendChatMessageReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendChatMessageReply.displayName = 'proto.io.haveno.protobuffer.SendChatMessageReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.TradeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.TradeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.TradeInfo.displayName = 'proto.io.haveno.protobuffer.TradeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.ContractInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.ContractInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.ContractInfo.displayName = 'proto.io.haveno.protobuffer.ContractInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetBalancesRequest.displayName = 'proto.io.haveno.protobuffer.GetBalancesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetBalancesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetBalancesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetBalancesReply.displayName = 'proto.io.haveno.protobuffer.GetBalancesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrSeedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrSeedRequest.displayName = 'proto.io.haveno.protobuffer.GetXmrSeedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrSeedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrSeedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrSeedReply.displayName = 'proto.io.haveno.protobuffer.GetXmrSeedReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.displayName = 'proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.displayName = 'proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.displayName = 'proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrNewSubaddressReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.displayName = 'proto.io.haveno.protobuffer.GetXmrNewSubaddressReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrTxsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrTxsRequest.displayName = 'proto.io.haveno.protobuffer.GetXmrTxsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetXmrTxsReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetXmrTxsReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetXmrTxsReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetXmrTxsReply.displayName = 'proto.io.haveno.protobuffer.GetXmrTxsReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.XmrTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.XmrTx.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.XmrTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.XmrTx.displayName = 'proto.io.haveno.protobuffer.XmrTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.XmrDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.XmrDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.XmrDestination.displayName = 'proto.io.haveno.protobuffer.XmrDestination';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.XmrIncomingTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.XmrIncomingTransfer.displayName = 'proto.io.haveno.protobuffer.XmrIncomingTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.XmrOutgoingTransfer.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.XmrOutgoingTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.XmrOutgoingTransfer.displayName = 'proto.io.haveno.protobuffer.XmrOutgoingTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.CreateXmrTxRequest.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateXmrTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateXmrTxRequest.displayName = 'proto.io.haveno.protobuffer.CreateXmrTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.CreateXmrTxReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.CreateXmrTxReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.CreateXmrTxReply.displayName = 'proto.io.haveno.protobuffer.CreateXmrTxReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RelayXmrTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RelayXmrTxRequest.displayName = 'proto.io.haveno.protobuffer.RelayXmrTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RelayXmrTxReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RelayXmrTxReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RelayXmrTxReply.displayName = 'proto.io.haveno.protobuffer.RelayXmrTxReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetAddressBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetAddressBalanceRequest.displayName = 'proto.io.haveno.protobuffer.GetAddressBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetAddressBalanceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetAddressBalanceReply.displayName = 'proto.io.haveno.protobuffer.GetAddressBalanceReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SendBtcRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SendBtcRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SendBtcRequest.displayName = 'proto.io.haveno.protobuffer.SendBtcRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetFundingAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetFundingAddressesRequest.displayName = 'proto.io.haveno.protobuffer.GetFundingAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.haveno.protobuffer.GetFundingAddressesReply.repeatedFields_, null);
};
goog.inherits(proto.io.haveno.protobuffer.GetFundingAddressesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.GetFundingAddressesReply.displayName = 'proto.io.haveno.protobuffer.GetFundingAddressesReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetWalletPasswordRequest.displayName = 'proto.io.haveno.protobuffer.SetWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.SetWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.SetWalletPasswordReply.displayName = 'proto.io.haveno.protobuffer.SetWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RemoveWalletPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.displayName = 'proto.io.haveno.protobuffer.RemoveWalletPasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.RemoveWalletPasswordReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.RemoveWalletPasswordReply.displayName = 'proto.io.haveno.protobuffer.RemoveWalletPasswordReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.LockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.LockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.LockWalletRequest.displayName = 'proto.io.haveno.protobuffer.LockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.LockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.LockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.LockWalletReply.displayName = 'proto.io.haveno.protobuffer.LockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.UnlockWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.UnlockWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.UnlockWalletRequest.displayName = 'proto.io.haveno.protobuffer.UnlockWalletRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.UnlockWalletReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.UnlockWalletReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.UnlockWalletReply.displayName = 'proto.io.haveno.protobuffer.UnlockWalletReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.BalancesInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.BalancesInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.BalancesInfo.displayName = 'proto.io.haveno.protobuffer.BalancesInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.BtcBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.BtcBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.BtcBalanceInfo.displayName = 'proto.io.haveno.protobuffer.BtcBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.XmrBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.XmrBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.XmrBalanceInfo.displayName = 'proto.io.haveno.protobuffer.XmrBalanceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.haveno.protobuffer.AddressBalanceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.haveno.protobuffer.AddressBalanceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.io.haveno.protobuffer.AddressBalanceInfo.displayName = 'proto.io.haveno.protobuffer.AddressBalanceInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMethodHelpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpRequest}
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMethodHelpRequest;
  return proto.io.haveno.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpRequest}
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_name = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpRequest} returns this
 */
proto.io.haveno.protobuffer.GetMethodHelpRequest.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMethodHelpReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodHelp: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpReply}
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMethodHelpReply;
  return proto.io.haveno.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpReply}
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodHelp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMethodHelpReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMethodHelpReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodHelp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string method_help = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.prototype.getMethodHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetMethodHelpReply} returns this
 */
proto.io.haveno.protobuffer.GetMethodHelpReply.prototype.setMethodHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetVersionRequest}
 */
proto.io.haveno.protobuffer.GetVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetVersionRequest;
  return proto.io.haveno.protobuffer.GetVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetVersionRequest}
 */
proto.io.haveno.protobuffer.GetVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetVersionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetVersionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetVersionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetVersionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetVersionReply}
 */
proto.io.haveno.protobuffer.GetVersionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetVersionReply;
  return proto.io.haveno.protobuffer.GetVersionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetVersionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetVersionReply}
 */
proto.io.haveno.protobuffer.GetVersionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetVersionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetVersionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetVersionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetVersionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetVersionReply.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetVersionReply} returns this
 */
proto.io.haveno.protobuffer.GetVersionReply.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AccountExistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AccountExistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AccountExistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AccountExistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AccountExistsRequest}
 */
proto.io.haveno.protobuffer.AccountExistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AccountExistsRequest;
  return proto.io.haveno.protobuffer.AccountExistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AccountExistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AccountExistsRequest}
 */
proto.io.haveno.protobuffer.AccountExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AccountExistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AccountExistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AccountExistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AccountExistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AccountExistsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AccountExistsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AccountExistsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AccountExistsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountExists: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AccountExistsReply}
 */
proto.io.haveno.protobuffer.AccountExistsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AccountExistsReply;
  return proto.io.haveno.protobuffer.AccountExistsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AccountExistsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AccountExistsReply}
 */
proto.io.haveno.protobuffer.AccountExistsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountExists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AccountExistsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AccountExistsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AccountExistsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AccountExistsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountExists();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool account_exists = 1;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.AccountExistsReply.prototype.getAccountExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.AccountExistsReply} returns this
 */
proto.io.haveno.protobuffer.AccountExistsReply.prototype.setAccountExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsAccountOpenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsAccountOpenRequest}
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsAccountOpenRequest;
  return proto.io.haveno.protobuffer.IsAccountOpenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsAccountOpenRequest}
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsAccountOpenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAccountOpenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsAccountOpenReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAccountOpen: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsAccountOpenReply}
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsAccountOpenReply;
  return proto.io.haveno.protobuffer.IsAccountOpenReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsAccountOpenReply}
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAccountOpen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsAccountOpenReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsAccountOpenReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAccountOpen();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_account_open = 1;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.prototype.getIsAccountOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.IsAccountOpenReply} returns this
 */
proto.io.haveno.protobuffer.IsAccountOpenReply.prototype.setIsAccountOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateAccountRequest}
 */
proto.io.haveno.protobuffer.CreateAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateAccountRequest;
  return proto.io.haveno.protobuffer.CreateAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateAccountRequest}
 */
proto.io.haveno.protobuffer.CreateAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.CreateAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CreateAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreateAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateAccountReply}
 */
proto.io.haveno.protobuffer.CreateAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateAccountReply;
  return proto.io.haveno.protobuffer.CreateAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateAccountReply}
 */
proto.io.haveno.protobuffer.CreateAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.OpenAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.OpenAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.OpenAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.OpenAccountRequest}
 */
proto.io.haveno.protobuffer.OpenAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.OpenAccountRequest;
  return proto.io.haveno.protobuffer.OpenAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.OpenAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.OpenAccountRequest}
 */
proto.io.haveno.protobuffer.OpenAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.OpenAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.OpenAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.OpenAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.OpenAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OpenAccountRequest} returns this
 */
proto.io.haveno.protobuffer.OpenAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.OpenAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.OpenAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.OpenAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.OpenAccountReply}
 */
proto.io.haveno.protobuffer.OpenAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.OpenAccountReply;
  return proto.io.haveno.protobuffer.OpenAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.OpenAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.OpenAccountReply}
 */
proto.io.haveno.protobuffer.OpenAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.OpenAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.OpenAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.OpenAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsAppInitializedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsAppInitializedRequest}
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsAppInitializedRequest;
  return proto.io.haveno.protobuffer.IsAppInitializedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsAppInitializedRequest}
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsAppInitializedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAppInitializedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsAppInitializedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAppInitialized: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsAppInitializedReply}
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsAppInitializedReply;
  return proto.io.haveno.protobuffer.IsAppInitializedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsAppInitializedReply}
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAppInitialized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsAppInitializedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsAppInitializedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAppInitialized();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_app_initialized = 1;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.prototype.getIsAppInitialized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.IsAppInitializedReply} returns this
 */
proto.io.haveno.protobuffer.IsAppInitializedReply.prototype.setIsAppInitialized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ChangePasswordRequest}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ChangePasswordRequest;
  return proto.io.haveno.protobuffer.ChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ChangePasswordRequest}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string old_password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ChangePasswordRequest} returns this
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ChangePasswordRequest} returns this
 */
proto.io.haveno.protobuffer.ChangePasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ChangePasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ChangePasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ChangePasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ChangePasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ChangePasswordReply}
 */
proto.io.haveno.protobuffer.ChangePasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ChangePasswordReply;
  return proto.io.haveno.protobuffer.ChangePasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ChangePasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ChangePasswordReply}
 */
proto.io.haveno.protobuffer.ChangePasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ChangePasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ChangePasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ChangePasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ChangePasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CloseAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CloseAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CloseAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CloseAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CloseAccountRequest}
 */
proto.io.haveno.protobuffer.CloseAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CloseAccountRequest;
  return proto.io.haveno.protobuffer.CloseAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CloseAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CloseAccountRequest}
 */
proto.io.haveno.protobuffer.CloseAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CloseAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CloseAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CloseAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CloseAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CloseAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CloseAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CloseAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CloseAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CloseAccountReply}
 */
proto.io.haveno.protobuffer.CloseAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CloseAccountReply;
  return proto.io.haveno.protobuffer.CloseAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CloseAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CloseAccountReply}
 */
proto.io.haveno.protobuffer.CloseAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CloseAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CloseAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CloseAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CloseAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.DeleteAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.DeleteAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.DeleteAccountRequest}
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.DeleteAccountRequest;
  return proto.io.haveno.protobuffer.DeleteAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.DeleteAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.DeleteAccountRequest}
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.DeleteAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.DeleteAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.DeleteAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.DeleteAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.DeleteAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.DeleteAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.DeleteAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.DeleteAccountReply}
 */
proto.io.haveno.protobuffer.DeleteAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.DeleteAccountReply;
  return proto.io.haveno.protobuffer.DeleteAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.DeleteAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.DeleteAccountReply}
 */
proto.io.haveno.protobuffer.DeleteAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.DeleteAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.DeleteAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.DeleteAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.DeleteAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.BackupAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.BackupAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.BackupAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BackupAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.BackupAccountRequest}
 */
proto.io.haveno.protobuffer.BackupAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.BackupAccountRequest;
  return proto.io.haveno.protobuffer.BackupAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.BackupAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.BackupAccountRequest}
 */
proto.io.haveno.protobuffer.BackupAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.BackupAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.BackupAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.BackupAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BackupAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.BackupAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.BackupAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BackupAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipBytes: msg.getZipBytes_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.BackupAccountReply}
 */
proto.io.haveno.protobuffer.BackupAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.BackupAccountReply;
  return proto.io.haveno.protobuffer.BackupAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.BackupAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.BackupAccountReply}
 */
proto.io.haveno.protobuffer.BackupAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setZipBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.BackupAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.BackupAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BackupAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes zip_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.getZipBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes zip_bytes = 1;
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {string}
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.getZipBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getZipBytes()));
};


/**
 * optional bytes zip_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.getZipBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getZipBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.io.haveno.protobuffer.BackupAccountReply} returns this
 */
proto.io.haveno.protobuffer.BackupAccountReply.prototype.setZipBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RestoreAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RestoreAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zipBytes: msg.getZipBytes_asB64(),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalLength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasMore: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RestoreAccountRequest;
  return proto.io.haveno.protobuffer.RestoreAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RestoreAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setZipBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalLength(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasMore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RestoreAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RestoreAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZipBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalLength();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getHasMore();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bytes zip_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getZipBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes zip_bytes = 1;
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {string}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getZipBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getZipBytes()));
};


/**
 * optional bytes zip_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getZipBytes()`
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getZipBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getZipBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.setZipBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_length = 3;
 * @return {number}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getTotalLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.setTotalLength = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool has_more = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.getHasMore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.RestoreAccountRequest} returns this
 */
proto.io.haveno.protobuffer.RestoreAccountRequest.prototype.setHasMore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RestoreAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RestoreAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RestoreAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RestoreAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RestoreAccountReply}
 */
proto.io.haveno.protobuffer.RestoreAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RestoreAccountReply;
  return proto.io.haveno.protobuffer.RestoreAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RestoreAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RestoreAccountReply}
 */
proto.io.haveno.protobuffer.RestoreAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RestoreAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RestoreAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RestoreAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RestoreAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetDisputesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetDisputesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetDisputesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetDisputesRequest}
 */
proto.io.haveno.protobuffer.GetDisputesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetDisputesRequest;
  return proto.io.haveno.protobuffer.GetDisputesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetDisputesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetDisputesRequest}
 */
proto.io.haveno.protobuffer.GetDisputesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetDisputesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetDisputesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetDisputesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetDisputesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetDisputesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetDisputesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetDisputesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputesList: jspb.Message.toObjectList(msg.getDisputesList(),
    pb_pb.Dispute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetDisputesReply}
 */
proto.io.haveno.protobuffer.GetDisputesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetDisputesReply;
  return proto.io.haveno.protobuffer.GetDisputesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetDisputesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetDisputesReply}
 */
proto.io.haveno.protobuffer.GetDisputesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.Dispute;
      reader.readMessage(value,pb_pb.Dispute.deserializeBinaryFromReader);
      msg.addDisputes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetDisputesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetDisputesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetDisputesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.Dispute.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Dispute disputes = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.Dispute>}
 */
proto.io.haveno.protobuffer.GetDisputesReply.prototype.getDisputesList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.Dispute>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.Dispute, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.Dispute>} value
 * @return {!proto.io.haveno.protobuffer.GetDisputesReply} returns this
*/
proto.io.haveno.protobuffer.GetDisputesReply.prototype.setDisputesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.Dispute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.Dispute}
 */
proto.io.haveno.protobuffer.GetDisputesReply.prototype.addDisputes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.Dispute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetDisputesReply} returns this
 */
proto.io.haveno.protobuffer.GetDisputesReply.prototype.clearDisputesList = function() {
  return this.setDisputesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetDisputeRequest}
 */
proto.io.haveno.protobuffer.GetDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetDisputeRequest;
  return proto.io.haveno.protobuffer.GetDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetDisputeRequest}
 */
proto.io.haveno.protobuffer.GetDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.GetDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    dispute: (f = msg.getDispute()) && pb_pb.Dispute.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetDisputeReply}
 */
proto.io.haveno.protobuffer.GetDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetDisputeReply;
  return proto.io.haveno.protobuffer.GetDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetDisputeReply}
 */
proto.io.haveno.protobuffer.GetDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.Dispute;
      reader.readMessage(value,pb_pb.Dispute.deserializeBinaryFromReader);
      msg.setDispute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDispute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.Dispute.serializeBinaryToWriter
    );
  }
};


/**
 * optional Dispute dispute = 1;
 * @return {?proto.io.haveno.protobuffer.Dispute}
 */
proto.io.haveno.protobuffer.GetDisputeReply.prototype.getDispute = function() {
  return /** @type{?proto.io.haveno.protobuffer.Dispute} */ (
    jspb.Message.getWrapperField(this, pb_pb.Dispute, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.Dispute|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetDisputeReply} returns this
*/
proto.io.haveno.protobuffer.GetDisputeReply.prototype.setDispute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetDisputeReply} returns this
 */
proto.io.haveno.protobuffer.GetDisputeReply.prototype.clearDispute = function() {
  return this.setDispute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetDisputeReply.prototype.hasDispute = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.OpenDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.OpenDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.OpenDisputeRequest}
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.OpenDisputeRequest;
  return proto.io.haveno.protobuffer.OpenDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.OpenDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.OpenDisputeRequest}
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.OpenDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.OpenDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OpenDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.OpenDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.OpenDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.OpenDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.OpenDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.OpenDisputeReply}
 */
proto.io.haveno.protobuffer.OpenDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.OpenDisputeReply;
  return proto.io.haveno.protobuffer.OpenDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.OpenDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.OpenDisputeReply}
 */
proto.io.haveno.protobuffer.OpenDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.OpenDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.OpenDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.OpenDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OpenDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ResolveDisputeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeReply}
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ResolveDisputeReply;
  return proto.io.haveno.protobuffer.ResolveDisputeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeReply}
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ResolveDisputeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ResolveDisputeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ResolveDisputeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    winner: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    summaryNotes: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customPayoutAmount: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ResolveDisputeRequest;
  return proto.io.haveno.protobuffer.ResolveDisputeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {!proto.io.haveno.protobuffer.DisputeResult.Winner} */ (reader.readEnum());
      msg.setWinner(value);
      break;
    case 3:
      var value = /** @type {!proto.io.haveno.protobuffer.DisputeResult.Reason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummaryNotes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCustomPayoutAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ResolveDisputeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ResolveDisputeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWinner();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSummaryNotes();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomPayoutAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DisputeResult.Winner winner = 2;
 * @return {!proto.io.haveno.protobuffer.DisputeResult.Winner}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.getWinner = function() {
  return /** @type {!proto.io.haveno.protobuffer.DisputeResult.Winner} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.DisputeResult.Winner} value
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.setWinner = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DisputeResult.Reason reason = 3;
 * @return {!proto.io.haveno.protobuffer.DisputeResult.Reason}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.getReason = function() {
  return /** @type {!proto.io.haveno.protobuffer.DisputeResult.Reason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.DisputeResult.Reason} value
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string summary_notes = 4;
 * @return {string}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.getSummaryNotes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.setSummaryNotes = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 custom_payout_amount = 5;
 * @return {string}
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.getCustomPayoutAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ResolveDisputeRequest} returns this
 */
proto.io.haveno.protobuffer.ResolveDisputeRequest.prototype.setCustomPayoutAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    pb_pb.Attachment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendDisputeChatMessageRequest;
  return proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new pb_pb.Attachment;
      reader.readMessage(value,pb_pb.Attachment.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      pb_pb.Attachment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string dispute_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.getDisputeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.setDisputeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Attachment attachments = 3;
 * @return {!Array<!proto.io.haveno.protobuffer.Attachment>}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.Attachment, 3));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.Attachment>} value
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} returns this
*/
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.Attachment}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.io.haveno.protobuffer.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageRequest} returns this
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendDisputeChatMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageReply}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendDisputeChatMessageReply;
  return proto.io.haveno.protobuffer.SendDisputeChatMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendDisputeChatMessageReply}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendDisputeChatMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendDisputeChatMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendDisputeChatMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    registrationKey: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RegisterDisputeAgentRequest;
  return proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegistrationKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegistrationKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string registration_key = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.getRegistrationKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentRequest} returns this
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentRequest.prototype.setRegistrationKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RegisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RegisterDisputeAgentReply;
  return proto.io.haveno.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RegisterDisputeAgentReply}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RegisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    disputeAgentType: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest;
  return proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeAgentType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisputeAgentType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string dispute_agent_type = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.prototype.getDisputeAgentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest} returns this
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentRequest.prototype.setDisputeAgentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.UnregisterDisputeAgentReply}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.UnregisterDisputeAgentReply;
  return proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.UnregisterDisputeAgentReply}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.UnregisterDisputeAgentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnregisterDisputeAgentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RegisterNotificationListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RegisterNotificationListenerRequest}
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RegisterNotificationListenerRequest;
  return proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RegisterNotificationListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RegisterNotificationListenerRequest}
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RegisterNotificationListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RegisterNotificationListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.NotificationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.NotificationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.NotificationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    trade: (f = msg.getTrade()) && proto.io.haveno.protobuffer.TradeInfo.toObject(includeInstance, f),
    chatMessage: (f = msg.getChatMessage()) && pb_pb.ChatMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.NotificationMessage}
 */
proto.io.haveno.protobuffer.NotificationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.NotificationMessage;
  return proto.io.haveno.protobuffer.NotificationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.NotificationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.NotificationMessage}
 */
proto.io.haveno.protobuffer.NotificationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.io.haveno.protobuffer.NotificationMessage.NotificationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = new proto.io.haveno.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 7:
      var value = new pb_pb.ChatMessage;
      reader.readMessage(value,pb_pb.ChatMessage.deserializeBinaryFromReader);
      msg.setChatMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.NotificationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.NotificationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.NotificationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getChatMessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      pb_pb.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.io.haveno.protobuffer.NotificationMessage.NotificationType = {
  ERROR: 0,
  APP_INITIALIZED: 1,
  KEEP_ALIVE: 2,
  TRADE_UPDATE: 3,
  CHAT_MESSAGE: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NotificationType type = 2;
 * @return {!proto.io.haveno.protobuffer.NotificationMessage.NotificationType}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getType = function() {
  return /** @type {!proto.io.haveno.protobuffer.NotificationMessage.NotificationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.NotificationMessage.NotificationType} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TradeInfo trade = 6;
 * @return {?proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getTrade = function() {
  return /** @type{?proto.io.haveno.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.TradeInfo, 6));
};


/**
 * @param {?proto.io.haveno.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
*/
proto.io.haveno.protobuffer.NotificationMessage.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ChatMessage chat_message = 7;
 * @return {?proto.io.haveno.protobuffer.ChatMessage}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.getChatMessage = function() {
  return /** @type{?proto.io.haveno.protobuffer.ChatMessage} */ (
    jspb.Message.getWrapperField(this, pb_pb.ChatMessage, 7));
};


/**
 * @param {?proto.io.haveno.protobuffer.ChatMessage|undefined} value
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
*/
proto.io.haveno.protobuffer.NotificationMessage.prototype.setChatMessage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.NotificationMessage} returns this
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.clearChatMessage = function() {
  return this.setChatMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.NotificationMessage.prototype.hasChatMessage = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notification: (f = msg.getNotification()) && proto.io.haveno.protobuffer.NotificationMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendNotificationRequest}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendNotificationRequest;
  return proto.io.haveno.protobuffer.SendNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendNotificationRequest}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.NotificationMessage;
      reader.readMessage(value,proto.io.haveno.protobuffer.NotificationMessage.deserializeBinaryFromReader);
      msg.setNotification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.NotificationMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional NotificationMessage notification = 1;
 * @return {?proto.io.haveno.protobuffer.NotificationMessage}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.getNotification = function() {
  return /** @type{?proto.io.haveno.protobuffer.NotificationMessage} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.NotificationMessage, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.NotificationMessage|undefined} value
 * @return {!proto.io.haveno.protobuffer.SendNotificationRequest} returns this
*/
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.setNotification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.SendNotificationRequest} returns this
 */
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.clearNotification = function() {
  return this.setNotification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.SendNotificationRequest.prototype.hasNotification = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendNotificationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendNotificationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendNotificationReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendNotificationReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendNotificationReply}
 */
proto.io.haveno.protobuffer.SendNotificationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendNotificationReply;
  return proto.io.haveno.protobuffer.SendNotificationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendNotificationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendNotificationReply}
 */
proto.io.haveno.protobuffer.SendNotificationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendNotificationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendNotificationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendNotificationReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendNotificationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.UrlConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.UrlConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UrlConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 4, 0),
    onlineStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    authenticationStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.UrlConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.UrlConnection;
  return proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.UrlConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 5:
      var value = /** @type {!proto.io.haveno.protobuffer.UrlConnection.OnlineStatus} */ (reader.readEnum());
      msg.setOnlineStatus(value);
      break;
    case 6:
      var value = /** @type {!proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus} */ (reader.readEnum());
      msg.setAuthenticationStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.UrlConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOnlineStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAuthenticationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.haveno.protobuffer.UrlConnection.OnlineStatus = {
  UNKNOWN: 0,
  ONLINE: 1,
  OFFLINE: 2
};

/**
 * @enum {number}
 */
proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus = {
  NO_AUTHENTICATION: 0,
  AUTHENTICATED: 1,
  NOT_AUTHENTICATED: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 priority = 4;
 * @return {number}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional OnlineStatus online_status = 5;
 * @return {!proto.io.haveno.protobuffer.UrlConnection.OnlineStatus}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getOnlineStatus = function() {
  return /** @type {!proto.io.haveno.protobuffer.UrlConnection.OnlineStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.UrlConnection.OnlineStatus} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setOnlineStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional AuthenticationStatus authentication_status = 6;
 * @return {!proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus}
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.getAuthenticationStatus = function() {
  return /** @type {!proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.UrlConnection.AuthenticationStatus} value
 * @return {!proto.io.haveno.protobuffer.UrlConnection} returns this
 */
proto.io.haveno.protobuffer.UrlConnection.prototype.setAuthenticationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AddConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AddConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.haveno.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AddConnectionRequest}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AddConnectionRequest;
  return proto.io.haveno.protobuffer.AddConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AddConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AddConnectionRequest}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AddConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AddConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.getConnection = function() {
  return /** @type{?proto.io.haveno.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.haveno.protobuffer.AddConnectionRequest} returns this
*/
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.AddConnectionRequest} returns this
 */
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.AddConnectionRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AddConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AddConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AddConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AddConnectionReply}
 */
proto.io.haveno.protobuffer.AddConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AddConnectionReply;
  return proto.io.haveno.protobuffer.AddConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AddConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AddConnectionReply}
 */
proto.io.haveno.protobuffer.AddConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AddConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AddConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AddConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RemoveConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RemoveConnectionRequest}
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RemoveConnectionRequest;
  return proto.io.haveno.protobuffer.RemoveConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RemoveConnectionRequest}
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RemoveConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RemoveConnectionRequest} returns this
 */
proto.io.haveno.protobuffer.RemoveConnectionRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RemoveConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RemoveConnectionReply}
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RemoveConnectionReply;
  return proto.io.haveno.protobuffer.RemoveConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RemoveConnectionReply}
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RemoveConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RemoveConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetConnectionRequest}
 */
proto.io.haveno.protobuffer.GetConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetConnectionRequest;
  return proto.io.haveno.protobuffer.GetConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetConnectionRequest}
 */
proto.io.haveno.protobuffer.GetConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.haveno.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetConnectionReply}
 */
proto.io.haveno.protobuffer.GetConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetConnectionReply;
  return proto.io.haveno.protobuffer.GetConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetConnectionReply}
 */
proto.io.haveno.protobuffer.GetConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.GetConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.haveno.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetConnectionReply} returns this
*/
proto.io.haveno.protobuffer.GetConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetConnectionReply} returns this
 */
proto.io.haveno.protobuffer.GetConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetConnectionsRequest}
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetConnectionsRequest;
  return proto.io.haveno.protobuffer.GetConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetConnectionsRequest}
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetConnectionsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.io.haveno.protobuffer.UrlConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetConnectionsReply}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetConnectionsReply;
  return proto.io.haveno.protobuffer.GetConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetConnectionsReply}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UrlConnection connections = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.UrlConnection>}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.UrlConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.UrlConnection>} value
 * @return {!proto.io.haveno.protobuffer.GetConnectionsReply} returns this
*/
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.UrlConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.UrlConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetConnectionsReply} returns this
 */
proto.io.haveno.protobuffer.GetConnectionsReply.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connection: (f = msg.getConnection()) && proto.io.haveno.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetConnectionRequest}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetConnectionRequest;
  return proto.io.haveno.protobuffer.SetConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetConnectionRequest}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SetConnectionRequest} returns this
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UrlConnection connection = 2;
 * @return {?proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.getConnection = function() {
  return /** @type{?proto.io.haveno.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 2));
};


/**
 * @param {?proto.io.haveno.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.haveno.protobuffer.SetConnectionRequest} returns this
*/
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.SetConnectionRequest} returns this
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.SetConnectionRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetConnectionReply}
 */
proto.io.haveno.protobuffer.SetConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetConnectionReply;
  return proto.io.haveno.protobuffer.SetConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetConnectionReply}
 */
proto.io.haveno.protobuffer.SetConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CheckConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CheckConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionRequest}
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CheckConnectionRequest;
  return proto.io.haveno.protobuffer.CheckConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionRequest}
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CheckConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CheckConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CheckConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.haveno.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionReply}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CheckConnectionReply;
  return proto.io.haveno.protobuffer.CheckConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionReply}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CheckConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.haveno.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.haveno.protobuffer.CheckConnectionReply} returns this
*/
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionReply} returns this
 */
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CheckConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CheckConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsRequest}
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CheckConnectionsRequest;
  return proto.io.haveno.protobuffer.CheckConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsRequest}
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CheckConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CheckConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.io.haveno.protobuffer.UrlConnection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsReply}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CheckConnectionsReply;
  return proto.io.haveno.protobuffer.CheckConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsReply}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CheckConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CheckConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UrlConnection connections = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.UrlConnection>}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.UrlConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.UrlConnection>} value
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsReply} returns this
*/
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.UrlConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.UrlConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.CheckConnectionsReply} returns this
 */
proto.io.haveno.protobuffer.CheckConnectionsReply.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshPeriod: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StartCheckingConnectionsRequest;
  return proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefreshPeriod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshPeriod();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 refresh_period = 1;
 * @return {number}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.prototype.getRefreshPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.StartCheckingConnectionsRequest} returns this
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsRequest.prototype.setRefreshPeriod = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StartCheckingConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StartCheckingConnectionsReply}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StartCheckingConnectionsReply;
  return proto.io.haveno.protobuffer.StartCheckingConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StartCheckingConnectionsReply}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StartCheckingConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StartCheckingConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartCheckingConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopCheckingConnectionsRequest}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopCheckingConnectionsRequest;
  return proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopCheckingConnectionsRequest}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopCheckingConnectionsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopCheckingConnectionsReply}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopCheckingConnectionsReply;
  return proto.io.haveno.protobuffer.StopCheckingConnectionsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopCheckingConnectionsReply}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopCheckingConnectionsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopCheckingConnectionsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopCheckingConnectionsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest;
  return proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    connection: (f = msg.getConnection()) && proto.io.haveno.protobuffer.UrlConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetBestAvailableConnectionReply;
  return proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.UrlConnection;
      reader.readMessage(value,proto.io.haveno.protobuffer.UrlConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.UrlConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional UrlConnection connection = 1;
 * @return {?proto.io.haveno.protobuffer.UrlConnection}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.getConnection = function() {
  return /** @type{?proto.io.haveno.protobuffer.UrlConnection} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.UrlConnection, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.UrlConnection|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply} returns this
*/
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetBestAvailableConnectionReply} returns this
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetBestAvailableConnectionReply.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetAutoSwitchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoSwitch: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetAutoSwitchRequest}
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetAutoSwitchRequest;
  return proto.io.haveno.protobuffer.SetAutoSwitchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetAutoSwitchRequest}
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoSwitch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetAutoSwitchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoSwitch();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool auto_switch = 1;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.prototype.getAutoSwitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.SetAutoSwitchRequest} returns this
 */
proto.io.haveno.protobuffer.SetAutoSwitchRequest.prototype.setAutoSwitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetAutoSwitchReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetAutoSwitchReply}
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetAutoSwitchReply;
  return proto.io.haveno.protobuffer.SetAutoSwitchReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetAutoSwitchReply}
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetAutoSwitchReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetAutoSwitchReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetAutoSwitchReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest;
  return proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    isRunning: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply;
  return proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRunning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsRunning();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_running = 1;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.prototype.getIsRunning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply} returns this
 */
proto.io.haveno.protobuffer.IsMoneroNodeOnlineReply.prototype.setIsRunning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest;
  return proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && pb_pb.MoneroNodeSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply;
  return proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.MoneroNodeSettings;
      reader.readMessage(value,pb_pb.MoneroNodeSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.MoneroNodeSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneroNodeSettings settings = 1;
 * @return {?proto.io.haveno.protobuffer.MoneroNodeSettings}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.getSettings = function() {
  return /** @type{?proto.io.haveno.protobuffer.MoneroNodeSettings} */ (
    jspb.Message.getWrapperField(this, pb_pb.MoneroNodeSettings, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.MoneroNodeSettings|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply} returns this
*/
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply} returns this
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetMoneroNodeSettingsReply.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StartMoneroNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    settings: (f = msg.getSettings()) && pb_pb.MoneroNodeSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeRequest}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StartMoneroNodeRequest;
  return proto.io.haveno.protobuffer.StartMoneroNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeRequest}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.MoneroNodeSettings;
      reader.readMessage(value,pb_pb.MoneroNodeSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StartMoneroNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.MoneroNodeSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoneroNodeSettings settings = 1;
 * @return {?proto.io.haveno.protobuffer.MoneroNodeSettings}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.getSettings = function() {
  return /** @type{?proto.io.haveno.protobuffer.MoneroNodeSettings} */ (
    jspb.Message.getWrapperField(this, pb_pb.MoneroNodeSettings, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.MoneroNodeSettings|undefined} value
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeRequest} returns this
*/
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.setSettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeRequest} returns this
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.StartMoneroNodeRequest.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StartMoneroNodeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeReply}
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StartMoneroNodeReply;
  return proto.io.haveno.protobuffer.StartMoneroNodeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StartMoneroNodeReply}
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StartMoneroNodeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StartMoneroNodeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StartMoneroNodeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopMoneroNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopMoneroNodeRequest}
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopMoneroNodeRequest;
  return proto.io.haveno.protobuffer.StopMoneroNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopMoneroNodeRequest}
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopMoneroNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopMoneroNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopMoneroNodeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopMoneroNodeReply}
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopMoneroNodeReply;
  return proto.io.haveno.protobuffer.StopMoneroNodeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopMoneroNodeReply}
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopMoneroNodeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopMoneroNodeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopMoneroNodeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetOfferRequest}
 */
proto.io.haveno.protobuffer.GetOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetOfferRequest;
  return proto.io.haveno.protobuffer.GetOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetOfferRequest}
 */
proto.io.haveno.protobuffer.GetOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetOfferRequest} returns this
 */
proto.io.haveno.protobuffer.GetOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.haveno.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetOfferReply}
 */
proto.io.haveno.protobuffer.GetOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetOfferReply;
  return proto.io.haveno.protobuffer.GetOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetOfferReply}
 */
proto.io.haveno.protobuffer.GetOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.GetOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.haveno.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetOfferReply} returns this
*/
proto.io.haveno.protobuffer.GetOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetOfferReply} returns this
 */
proto.io.haveno.protobuffer.GetOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMyOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMyOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMyOfferRequest}
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMyOfferRequest;
  return proto.io.haveno.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMyOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMyOfferRequest}
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMyOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMyOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetMyOfferRequest} returns this
 */
proto.io.haveno.protobuffer.GetMyOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMyOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMyOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.haveno.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMyOfferReply}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMyOfferReply;
  return proto.io.haveno.protobuffer.GetMyOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMyOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMyOfferReply}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMyOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMyOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.haveno.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetMyOfferReply} returns this
*/
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetMyOfferReply} returns this
 */
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetMyOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetOffersRequest}
 */
proto.io.haveno.protobuffer.GetOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetOffersRequest;
  return proto.io.haveno.protobuffer.GetOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetOffersRequest}
 */
proto.io.haveno.protobuffer.GetOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetOffersRequest} returns this
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetOffersRequest} returns this
 */
proto.io.haveno.protobuffer.GetOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.haveno.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetOffersReply}
 */
proto.io.haveno.protobuffer.GetOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetOffersReply;
  return proto.io.haveno.protobuffer.GetOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetOffersReply}
 */
proto.io.haveno.protobuffer.GetOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.OfferInfo>}
 */
proto.io.haveno.protobuffer.GetOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.OfferInfo>} value
 * @return {!proto.io.haveno.protobuffer.GetOffersReply} returns this
*/
proto.io.haveno.protobuffer.GetOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.GetOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetOffersReply} returns this
 */
proto.io.haveno.protobuffer.GetOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMyOffersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMyOffersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMyOffersRequest}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMyOffersRequest;
  return proto.io.haveno.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMyOffersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMyOffersRequest}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMyOffersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMyOffersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string direction = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetMyOffersRequest} returns this
 */
proto.io.haveno.protobuffer.GetMyOffersRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetMyOffersReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetMyOffersReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetMyOffersReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOffersReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offersList: jspb.Message.toObjectList(msg.getOffersList(),
    proto.io.haveno.protobuffer.OfferInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetMyOffersReply}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetMyOffersReply;
  return proto.io.haveno.protobuffer.GetMyOffersReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetMyOffersReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetMyOffersReply}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.addOffers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetMyOffersReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetMyOffersReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetMyOffersReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OfferInfo offers = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.OfferInfo>}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.getOffersList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.OfferInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.OfferInfo>} value
 * @return {!proto.io.haveno.protobuffer.GetMyOffersReply} returns this
*/
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.setOffersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.OfferInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.addOffers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.OfferInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetMyOffersReply} returns this
 */
proto.io.haveno.protobuffer.GetMyOffersReply.prototype.clearOffersList = function() {
  return this.setOffersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.PostOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.PostOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.PostOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    buyerSecurityDepositPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 9, ""),
    reserveExactAmount: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest}
 */
proto.io.haveno.protobuffer.PostOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.PostOfferRequest;
  return proto.io.haveno.protobuffer.PostOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.PostOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest}
 */
proto.io.haveno.protobuffer.PostOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyerSecurityDepositPct(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReserveExactAmount(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.PostOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.PostOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.PostOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getBuyerSecurityDepositPct();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getReserveExactAmount();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional double buyer_security_deposit_pct = 8;
 * @return {number}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getBuyerSecurityDepositPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setBuyerSecurityDepositPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string trigger_price = 9;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool reserve_exact_amount = 10;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getReserveExactAmount = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setReserveExactAmount = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string payment_account_id = 11;
 * @return {string}
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.PostOfferRequest} returns this
 */
proto.io.haveno.protobuffer.PostOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.PostOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.PostOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.PostOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.PostOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.haveno.protobuffer.OfferInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.PostOfferReply}
 */
proto.io.haveno.protobuffer.PostOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.PostOfferReply;
  return proto.io.haveno.protobuffer.PostOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.PostOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.PostOfferReply}
 */
proto.io.haveno.protobuffer.PostOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.PostOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.PostOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.PostOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.PostOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.PostOfferReply.prototype.getOffer = function() {
  return /** @type{?proto.io.haveno.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.PostOfferReply} returns this
*/
proto.io.haveno.protobuffer.PostOfferReply.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.PostOfferReply} returns this
 */
proto.io.haveno.protobuffer.PostOfferReply.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.PostOfferReply.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CancelOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CancelOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CancelOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CancelOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CancelOfferRequest}
 */
proto.io.haveno.protobuffer.CancelOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CancelOfferRequest;
  return proto.io.haveno.protobuffer.CancelOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CancelOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CancelOfferRequest}
 */
proto.io.haveno.protobuffer.CancelOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CancelOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CancelOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CancelOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CancelOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.CancelOfferRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CancelOfferRequest} returns this
 */
proto.io.haveno.protobuffer.CancelOfferRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CancelOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CancelOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CancelOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CancelOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CancelOfferReply}
 */
proto.io.haveno.protobuffer.CancelOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CancelOfferReply;
  return proto.io.haveno.protobuffer.CancelOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CancelOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CancelOfferReply}
 */
proto.io.haveno.protobuffer.CancelOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CancelOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CancelOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CancelOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CancelOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.OfferInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.OfferInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OfferInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    useMarketBasedPrice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    marketPriceMarginPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    minAmount: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    volume: jspb.Message.getFieldWithDefault(msg, 8, ""),
    minVolume: jspb.Message.getFieldWithDefault(msg, 9, ""),
    buyerSecurityDepositPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    sellerSecurityDepositPct: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 12, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    paymentMethodShortName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    baseCurrencyCode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    counterCurrencyCode: jspb.Message.getFieldWithDefault(msg, 17, ""),
    date: jspb.Message.getFieldWithDefault(msg, 18, 0),
    state: jspb.Message.getFieldWithDefault(msg, 19, ""),
    makerFee: jspb.Message.getFieldWithDefault(msg, 20, "0"),
    isActivated: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isMyOffer: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    ownerNodeAddress: jspb.Message.getFieldWithDefault(msg, 23, ""),
    pubKeyRing: jspb.Message.getFieldWithDefault(msg, 24, ""),
    versionNr: jspb.Message.getFieldWithDefault(msg, 25, ""),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 26, 0),
    arbitratorSigner: jspb.Message.getFieldWithDefault(msg, 27, ""),
    splitOutputTxHash: jspb.Message.getFieldWithDefault(msg, 28, ""),
    splitOutputTxFee: jspb.Message.getFieldWithDefault(msg, 29, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.OfferInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.OfferInfo;
  return proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.OfferInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMarketBasedPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarketPriceMarginPct(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMinAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolume(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinVolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBuyerSecurityDepositPct(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSellerSecurityDepositPct(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodShortName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseCurrencyCode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterCurrencyCode(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMakerFee(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMyOffer(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerNodeAddress(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKeyRing(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionNr(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorSigner(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setSplitOutputTxHash(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSplitOutputTxFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.OfferInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDirection();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUseMarketBasedPrice();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMarketPriceMarginPct();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getMinAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMinVolume();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDepositPct();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getSellerSecurityDepositPct();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPaymentMethodShortName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBaseCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCounterCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getMakerFee();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      20,
      f
    );
  }
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsMyOffer();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getOwnerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getPubKeyRing();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getVersionNr();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getProtocolVersion();
  if (f !== 0) {
    writer.writeInt32(
      26,
      f
    );
  }
  f = message.getArbitratorSigner();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getSplitOutputTxHash();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getSplitOutputTxFee();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      29,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string direction = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool use_market_based_price = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getUseMarketBasedPrice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setUseMarketBasedPrice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double market_price_margin_pct = 5;
 * @return {number}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getMarketPriceMarginPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setMarketPriceMarginPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 amount = 6;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional uint64 min_amount = 7;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional string volume = 8;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string min_volume = 9;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getMinVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setMinVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional double buyer_security_deposit_pct = 10;
 * @return {number}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getBuyerSecurityDepositPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setBuyerSecurityDepositPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double seller_security_deposit_pct = 11;
 * @return {number}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getSellerSecurityDepositPct = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setSellerSecurityDepositPct = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string trigger_price = 12;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payment_account_id = 13;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payment_method_id = 14;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string payment_method_short_name = 15;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getPaymentMethodShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setPaymentMethodShortName = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string base_currency_code = 16;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getBaseCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setBaseCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string counter_currency_code = 17;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getCounterCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setCounterCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional uint64 date = 18;
 * @return {number}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string state = 19;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional uint64 maker_fee = 20;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getMakerFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setMakerFee = function(value) {
  return jspb.Message.setProto3StringIntField(this, 20, value);
};


/**
 * optional bool is_activated = 21;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setIsActivated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_my_offer = 22;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getIsMyOffer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setIsMyOffer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional string owner_node_address = 23;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getOwnerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setOwnerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string pub_key_ring = 24;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getPubKeyRing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setPubKeyRing = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string version_nr = 25;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getVersionNr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setVersionNr = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional int32 protocol_version = 26;
 * @return {number}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional string arbitrator_signer = 27;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getArbitratorSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setArbitratorSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string split_output_tx_hash = 28;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getSplitOutputTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setSplitOutputTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional uint64 split_output_tx_fee = 29;
 * @return {string}
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.getSplitOutputTxFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.OfferInfo} returns this
 */
proto.io.haveno.protobuffer.OfferInfo.prototype.setSplitOutputTxFee = function(value) {
  return jspb.Message.setProto3StringIntField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AvailabilityResultWithDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    availabilityResult: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AvailabilityResultWithDescription;
  return proto.io.haveno.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.haveno.protobuffer.AvailabilityResult} */ (reader.readEnum());
      msg.setAvailabilityResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailabilityResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AvailabilityResult availability_result = 1;
 * @return {!proto.io.haveno.protobuffer.AvailabilityResult}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.getAvailabilityResult = function() {
  return /** @type {!proto.io.haveno.protobuffer.AvailabilityResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.AvailabilityResult} value
 * @return {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.setAvailabilityResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.AvailabilityResultWithDescription} returns this
 */
proto.io.haveno.protobuffer.AvailabilityResultWithDescription.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreatePaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: (f = msg.getPaymentAccountForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f),
    paymentAccountFormAsJson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreatePaymentAccountRequest;
  return proto.io.haveno.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setPaymentAccountForm(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormAsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
  f = message.getPaymentAccountFormAsJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PaymentAccountForm payment_account_form = 1;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountForm}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountForm = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} returns this
*/
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.clearPaymentAccountForm = function() {
  return this.setPaymentAccountForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.hasPaymentAccountForm = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string payment_account_form_as_json = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.getPaymentAccountFormAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreatePaymentAccountRequest.prototype.setPaymentAccountFormAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreatePaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountReply}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreatePaymentAccountReply;
  return proto.io.haveno.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountReply}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreatePaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.haveno.protobuffer.PaymentAccount}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountReply} returns this
*/
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.CreatePaymentAccountReply} returns this
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CreatePaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountsRequest;
  return proto.io.haveno.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountsList: jspb.Message.toObjectList(msg.getPaymentAccountsList(),
    pb_pb.PaymentAccount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountsReply;
  return proto.io.haveno.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.addPaymentAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentAccount payment_accounts = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.PaymentAccount>}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.getPaymentAccountsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.PaymentAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.PaymentAccount>} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsReply} returns this
*/
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.setPaymentAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.PaymentAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.PaymentAccount}
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.addPaymentAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.PaymentAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountsReply} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountsReply.prototype.clearPaymentAccountsList = function() {
  return this.setPaymentAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentMethodsRequest;
  return proto.io.haveno.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsRequest}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsReply}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentMethodsReply;
  return proto.io.haveno.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsReply}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.PaymentMethod>}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.PaymentMethod>} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsReply} returns this
*/
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.PaymentMethod}
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetPaymentMethodsReply} returns this
 */
proto.io.haveno.protobuffer.GetPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountPayload: (f = msg.getPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountFormRequest;
  return proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    case 2:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setPaymentAccountPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PaymentAccountPayload payment_account_payload = 2;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountPayload}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.getPaymentAccountPayload = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 2));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} returns this
*/
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.setPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormRequest} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.clearPaymentAccountPayload = function() {
  return this.setPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormRequest.prototype.hasPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountFormReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountForm: (f = msg.getPaymentAccountForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountFormReply;
  return proto.io.haveno.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setPaymentAccountForm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccountForm payment_account_form = 1;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountForm}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.getPaymentAccountForm = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply} returns this
*/
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.setPaymentAccountForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormReply} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.clearPaymentAccountForm = function() {
  return this.setPaymentAccountForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormReply.prototype.hasPaymentAccountForm = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest;
  return proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentMethodId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_method_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.getPaymentMethodId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonRequest.prototype.setPaymentMethodId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccountFormAsJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply;
  return proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountFormAsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccountFormAsJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payment_account_form_as_json = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.getPaymentAccountFormAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply} returns this
 */
proto.io.haveno.protobuffer.GetPaymentAccountFormAsJsonReply.prototype.setPaymentAccountFormAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currencyCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeInstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest;
  return proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTradeInstant(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTradeInstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string account_name = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool trade_instant = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.getTradeInstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest} returns this
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountRequest.prototype.setTradeInstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentAccount: (f = msg.getPaymentAccount()) && pb_pb.PaymentAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply;
  return proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccount;
      reader.readMessage(value,pb_pb.PaymentAccount.deserializeBinaryFromReader);
      msg.setPaymentAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional PaymentAccount payment_account = 1;
 * @return {?proto.io.haveno.protobuffer.PaymentAccount}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.getPaymentAccount = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccount} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccount, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccount|undefined} value
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
*/
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.setPaymentAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply} returns this
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.clearPaymentAccount = function() {
  return this.setPaymentAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CreateCryptoCurrencyPaymentAccountReply.prototype.hasPaymentAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest;
  return proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentMethodsList: jspb.Message.toObjectList(msg.getPaymentMethodsList(),
    pb_pb.PaymentMethod.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply;
  return proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentMethod;
      reader.readMessage(value,pb_pb.PaymentMethod.deserializeBinaryFromReader);
      msg.addPaymentMethods(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.PaymentMethod.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PaymentMethod payment_methods = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.PaymentMethod>}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.getPaymentMethodsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.PaymentMethod>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.PaymentMethod, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.PaymentMethod>} value
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
*/
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.setPaymentMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.PaymentMethod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.PaymentMethod}
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.addPaymentMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.PaymentMethod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply} returns this
 */
proto.io.haveno.protobuffer.GetCryptoCurrencyPaymentMethodsReply.prototype.clearPaymentMethodsList = function() {
  return this.setPaymentMethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ValidateFormFieldRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    form: (f = msg.getForm()) && pb_pb.PaymentAccountForm.toObject(includeInstance, f),
    fieldId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ValidateFormFieldRequest;
  return proto.io.haveno.protobuffer.ValidateFormFieldRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.PaymentAccountForm;
      reader.readMessage(value,pb_pb.PaymentAccountForm.deserializeBinaryFromReader);
      msg.setForm(value);
      break;
    case 2:
      var value = /** @type {!proto.io.haveno.protobuffer.PaymentAccountFormField.FieldId} */ (reader.readEnum());
      msg.setFieldId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ValidateFormFieldRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pb_pb.PaymentAccountForm.serializeBinaryToWriter
    );
  }
  f = message.getFieldId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PaymentAccountForm form = 1;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountForm}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.getForm = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountForm} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountForm, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountForm|undefined} value
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} returns this
*/
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.setForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.hasForm = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaymentAccountFormField.FieldId field_id = 2;
 * @return {!proto.io.haveno.protobuffer.PaymentAccountFormField.FieldId}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.getFieldId = function() {
  return /** @type {!proto.io.haveno.protobuffer.PaymentAccountFormField.FieldId} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.PaymentAccountFormField.FieldId} value
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.setFieldId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldRequest} returns this
 */
proto.io.haveno.protobuffer.ValidateFormFieldRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ValidateFormFieldReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldReply}
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ValidateFormFieldReply;
  return proto.io.haveno.protobuffer.ValidateFormFieldReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ValidateFormFieldReply}
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ValidateFormFieldReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ValidateFormFieldReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ValidateFormFieldReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketPriceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketPriceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketPriceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketPriceRequest}
 */
proto.io.haveno.protobuffer.MarketPriceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketPriceRequest;
  return proto.io.haveno.protobuffer.MarketPriceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketPriceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketPriceRequest}
 */
proto.io.haveno.protobuffer.MarketPriceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketPriceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketPriceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketPriceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.MarketPriceRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.MarketPriceRequest} returns this
 */
proto.io.haveno.protobuffer.MarketPriceRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketPriceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketPriceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketPriceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketPriceReply}
 */
proto.io.haveno.protobuffer.MarketPriceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketPriceReply;
  return proto.io.haveno.protobuffer.MarketPriceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketPriceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketPriceReply}
 */
proto.io.haveno.protobuffer.MarketPriceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketPriceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketPriceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketPriceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.io.haveno.protobuffer.MarketPriceReply.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.MarketPriceReply} returns this
 */
proto.io.haveno.protobuffer.MarketPriceReply.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketPricesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketPricesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketPricesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPricesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketPricesRequest}
 */
proto.io.haveno.protobuffer.MarketPricesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketPricesRequest;
  return proto.io.haveno.protobuffer.MarketPricesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketPricesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketPricesRequest}
 */
proto.io.haveno.protobuffer.MarketPricesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketPricesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketPricesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketPricesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPricesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.MarketPricesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketPricesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketPricesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketPricesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPricesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketPriceList: jspb.Message.toObjectList(msg.getMarketPriceList(),
    proto.io.haveno.protobuffer.MarketPriceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketPricesReply}
 */
proto.io.haveno.protobuffer.MarketPricesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketPricesReply;
  return proto.io.haveno.protobuffer.MarketPricesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketPricesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketPricesReply}
 */
proto.io.haveno.protobuffer.MarketPricesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.MarketPriceInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.MarketPriceInfo.deserializeBinaryFromReader);
      msg.addMarketPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketPricesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketPricesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketPricesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPricesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketPriceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.MarketPriceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarketPriceInfo market_price = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.MarketPriceInfo>}
 */
proto.io.haveno.protobuffer.MarketPricesReply.prototype.getMarketPriceList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.MarketPriceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.MarketPriceInfo, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.MarketPriceInfo>} value
 * @return {!proto.io.haveno.protobuffer.MarketPricesReply} returns this
*/
proto.io.haveno.protobuffer.MarketPricesReply.prototype.setMarketPriceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.MarketPriceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.MarketPriceInfo}
 */
proto.io.haveno.protobuffer.MarketPricesReply.prototype.addMarketPrice = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.MarketPriceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.MarketPricesReply} returns this
 */
proto.io.haveno.protobuffer.MarketPricesReply.prototype.clearMarketPriceList = function() {
  return this.setMarketPriceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketPriceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketPriceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketPriceInfo}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketPriceInfo;
  return proto.io.haveno.protobuffer.MarketPriceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketPriceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketPriceInfo}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketPriceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketPriceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketPriceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.MarketPriceInfo} returns this
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double price = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.MarketPriceInfo} returns this
 */
proto.io.haveno.protobuffer.MarketPriceInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketDepthRequest}
 */
proto.io.haveno.protobuffer.MarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketDepthRequest;
  return proto.io.haveno.protobuffer.MarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketDepthRequest}
 */
proto.io.haveno.protobuffer.MarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.MarketDepthRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthRequest} returns this
 */
proto.io.haveno.protobuffer.MarketDepthRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketDepthReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketDepthReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketDepthReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketDepth: (f = msg.getMarketDepth()) && proto.io.haveno.protobuffer.MarketDepthInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketDepthReply}
 */
proto.io.haveno.protobuffer.MarketDepthReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketDepthReply;
  return proto.io.haveno.protobuffer.MarketDepthReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketDepthReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketDepthReply}
 */
proto.io.haveno.protobuffer.MarketDepthReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.MarketDepthInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.MarketDepthInfo.deserializeBinaryFromReader);
      msg.setMarketDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketDepthReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketDepthReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketDepthReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketDepth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.MarketDepthInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MarketDepthInfo market_depth = 1;
 * @return {?proto.io.haveno.protobuffer.MarketDepthInfo}
 */
proto.io.haveno.protobuffer.MarketDepthReply.prototype.getMarketDepth = function() {
  return /** @type{?proto.io.haveno.protobuffer.MarketDepthInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.MarketDepthInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.MarketDepthInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthReply} returns this
*/
proto.io.haveno.protobuffer.MarketDepthReply.prototype.setMarketDepth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.MarketDepthReply} returns this
 */
proto.io.haveno.protobuffer.MarketDepthReply.prototype.clearMarketDepth = function() {
  return this.setMarketDepth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.MarketDepthReply.prototype.hasMarketDepth = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.MarketDepthInfo.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.MarketDepthInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.MarketDepthInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyPricesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    buyDepthList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    sellPricesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    sellDepthList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.MarketDepthInfo;
  return proto.io.haveno.protobuffer.MarketDepthInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.MarketDepthInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBuyPrices(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBuyDepth(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSellPrices(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSellDepth(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.MarketDepthInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.MarketDepthInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.MarketDepthInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyPricesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getBuyDepthList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
  f = message.getSellPricesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getSellDepthList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated double buy_prices = 2;
 * @return {!Array<number>}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.getBuyPricesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.setBuyPricesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.addBuyPrices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.clearBuyPricesList = function() {
  return this.setBuyPricesList([]);
};


/**
 * repeated double buy_depth = 3;
 * @return {!Array<number>}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.getBuyDepthList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.setBuyDepthList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.addBuyDepth = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.clearBuyDepthList = function() {
  return this.setBuyDepthList([]);
};


/**
 * repeated double sell_prices = 4;
 * @return {!Array<number>}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.getSellPricesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.setSellPricesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.addSellPrices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.clearSellPricesList = function() {
  return this.setSellPricesList([]);
};


/**
 * repeated double sell_depth = 5;
 * @return {!Array<number>}
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.getSellDepthList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.setSellDepthList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.addSellDepth = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.MarketDepthInfo} returns this
 */
proto.io.haveno.protobuffer.MarketDepthInfo.prototype.clearSellDepthList = function() {
  return this.setSellDepthList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradeStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradeStatisticsRequest;
  return proto.io.haveno.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsRequest}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradeStatisticsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeStatisticsList: jspb.Message.toObjectList(msg.getTradeStatisticsList(),
    pb_pb.TradeStatistics3.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsReply}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradeStatisticsReply;
  return proto.io.haveno.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsReply}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.TradeStatistics3;
      reader.readMessage(value,pb_pb.TradeStatistics3.deserializeBinaryFromReader);
      msg.addTradeStatistics(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradeStatisticsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeStatisticsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.TradeStatistics3.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeStatistics3 trade_statistics = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.TradeStatistics3>}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.getTradeStatisticsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.TradeStatistics3>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.TradeStatistics3, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.TradeStatistics3>} value
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsReply} returns this
*/
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.setTradeStatisticsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.TradeStatistics3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.TradeStatistics3}
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.addTradeStatistics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.TradeStatistics3, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetTradeStatisticsReply} returns this
 */
proto.io.haveno.protobuffer.GetTradeStatisticsReply.prototype.clearTradeStatisticsList = function() {
  return this.setTradeStatisticsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopRequest}
 */
proto.io.haveno.protobuffer.StopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopRequest;
  return proto.io.haveno.protobuffer.StopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopRequest}
 */
proto.io.haveno.protobuffer.StopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.StopReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.StopReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.StopReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.StopReply}
 */
proto.io.haveno.protobuffer.StopReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.StopReply;
  return proto.io.haveno.protobuffer.StopReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.StopReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.StopReply}
 */
proto.io.haveno.protobuffer.StopReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.StopReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.StopReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.StopReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.StopReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.TakeOfferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.TakeOfferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TakeOfferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentAccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.TakeOfferRequest}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.TakeOfferRequest;
  return proto.io.haveno.protobuffer.TakeOfferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.TakeOfferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.TakeOfferRequest}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfferId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentAccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.TakeOfferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.TakeOfferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TakeOfferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOfferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentAccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional string offer_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.getOfferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TakeOfferRequest} returns this
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.setOfferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_account_id = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.getPaymentAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TakeOfferRequest} returns this
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.setPaymentAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TakeOfferRequest} returns this
 */
proto.io.haveno.protobuffer.TakeOfferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.TakeOfferReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.TakeOfferReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TakeOfferReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.haveno.protobuffer.TradeInfo.toObject(includeInstance, f),
    failureReason: (f = msg.getFailureReason()) && proto.io.haveno.protobuffer.AvailabilityResultWithDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply}
 */
proto.io.haveno.protobuffer.TakeOfferReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.TakeOfferReply;
  return proto.io.haveno.protobuffer.TakeOfferReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.TakeOfferReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply}
 */
proto.io.haveno.protobuffer.TakeOfferReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 2:
      var value = new proto.io.haveno.protobuffer.AvailabilityResultWithDescription;
      reader.readMessage(value,proto.io.haveno.protobuffer.AvailabilityResultWithDescription.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.TakeOfferReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.TakeOfferReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TakeOfferReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.haveno.protobuffer.AvailabilityResultWithDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.getTrade = function() {
  return /** @type{?proto.io.haveno.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply} returns this
*/
proto.io.haveno.protobuffer.TakeOfferReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply} returns this
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailabilityResultWithDescription failure_reason = 2;
 * @return {?proto.io.haveno.protobuffer.AvailabilityResultWithDescription}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.getFailureReason = function() {
  return /** @type{?proto.io.haveno.protobuffer.AvailabilityResultWithDescription} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.AvailabilityResultWithDescription, 2));
};


/**
 * @param {?proto.io.haveno.protobuffer.AvailabilityResultWithDescription|undefined} value
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply} returns this
*/
proto.io.haveno.protobuffer.TakeOfferReply.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.TakeOfferReply} returns this
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TakeOfferReply.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ConfirmPaymentSentRequest;
  return proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentSentRequest} returns this
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ConfirmPaymentSentReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentSentReply}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ConfirmPaymentSentReply;
  return proto.io.haveno.protobuffer.ConfirmPaymentSentReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentSentReply}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ConfirmPaymentSentReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentSentReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentSentReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest;
  return proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest} returns this
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply;
  return proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ConfirmPaymentReceivedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradeRequest}
 */
proto.io.haveno.protobuffer.GetTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradeRequest;
  return proto.io.haveno.protobuffer.GetTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradeRequest}
 */
proto.io.haveno.protobuffer.GetTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetTradeRequest} returns this
 */
proto.io.haveno.protobuffer.GetTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    trade: (f = msg.getTrade()) && proto.io.haveno.protobuffer.TradeInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradeReply}
 */
proto.io.haveno.protobuffer.GetTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradeReply;
  return proto.io.haveno.protobuffer.GetTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradeReply}
 */
proto.io.haveno.protobuffer.GetTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional TradeInfo trade = 1;
 * @return {?proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.GetTradeReply.prototype.getTrade = function() {
  return /** @type{?proto.io.haveno.protobuffer.TradeInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.TradeInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.TradeInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetTradeReply} returns this
*/
proto.io.haveno.protobuffer.GetTradeReply.prototype.setTrade = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetTradeReply} returns this
 */
proto.io.haveno.protobuffer.GetTradeReply.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetTradeReply.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradesRequest}
 */
proto.io.haveno.protobuffer.GetTradesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradesRequest;
  return proto.io.haveno.protobuffer.GetTradesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradesRequest}
 */
proto.io.haveno.protobuffer.GetTradesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.haveno.protobuffer.GetTradesRequest.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.io.haveno.protobuffer.GetTradesRequest.Category = {
  OPEN: 0,
  CLOSED: 1,
  FAILED: 2
};

/**
 * optional Category category = 1;
 * @return {!proto.io.haveno.protobuffer.GetTradesRequest.Category}
 */
proto.io.haveno.protobuffer.GetTradesRequest.prototype.getCategory = function() {
  return /** @type {!proto.io.haveno.protobuffer.GetTradesRequest.Category} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.io.haveno.protobuffer.GetTradesRequest.Category} value
 * @return {!proto.io.haveno.protobuffer.GetTradesRequest} returns this
 */
proto.io.haveno.protobuffer.GetTradesRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetTradesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetTradesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetTradesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetTradesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.io.haveno.protobuffer.TradeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetTradesReply}
 */
proto.io.haveno.protobuffer.GetTradesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetTradesReply;
  return proto.io.haveno.protobuffer.GetTradesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetTradesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetTradesReply}
 */
proto.io.haveno.protobuffer.GetTradesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.TradeInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetTradesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetTradesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetTradesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetTradesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TradeInfo trades = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.TradeInfo>}
 */
proto.io.haveno.protobuffer.GetTradesReply.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.TradeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.TradeInfo, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.TradeInfo>} value
 * @return {!proto.io.haveno.protobuffer.GetTradesReply} returns this
*/
proto.io.haveno.protobuffer.GetTradesReply.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.TradeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.GetTradesReply.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.TradeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetTradesReply} returns this
 */
proto.io.haveno.protobuffer.GetTradesReply.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CompleteTradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CompleteTradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CompleteTradeRequest}
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CompleteTradeRequest;
  return proto.io.haveno.protobuffer.CompleteTradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CompleteTradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CompleteTradeRequest}
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CompleteTradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CompleteTradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.CompleteTradeRequest} returns this
 */
proto.io.haveno.protobuffer.CompleteTradeRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CompleteTradeReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CompleteTradeReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CompleteTradeReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CompleteTradeReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CompleteTradeReply}
 */
proto.io.haveno.protobuffer.CompleteTradeReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CompleteTradeReply;
  return proto.io.haveno.protobuffer.CompleteTradeReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CompleteTradeReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CompleteTradeReply}
 */
proto.io.haveno.protobuffer.CompleteTradeReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CompleteTradeReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CompleteTradeReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CompleteTradeReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CompleteTradeReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.WithdrawFundsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsRequest}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.WithdrawFundsRequest;
  return proto.io.haveno.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsRequest}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string memo = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsRequest} returns this
 */
proto.io.haveno.protobuffer.WithdrawFundsRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.WithdrawFundsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsReply}
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.WithdrawFundsReply;
  return proto.io.haveno.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.WithdrawFundsReply}
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.WithdrawFundsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.WithdrawFundsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.WithdrawFundsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetChatMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesRequest}
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetChatMessagesRequest;
  return proto.io.haveno.protobuffer.GetChatMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesRequest}
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetChatMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesRequest} returns this
 */
proto.io.haveno.protobuffer.GetChatMessagesRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetChatMessagesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    pb_pb.ChatMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesReply}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetChatMessagesReply;
  return proto.io.haveno.protobuffer.GetChatMessagesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesReply}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_pb.ChatMessage;
      reader.readMessage(value,pb_pb.ChatMessage.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetChatMessagesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetChatMessagesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_pb.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChatMessage message = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.ChatMessage>}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.getMessageList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.ChatMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_pb.ChatMessage, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.ChatMessage>} value
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesReply} returns this
*/
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.setMessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.ChatMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.ChatMessage}
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.ChatMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetChatMessagesReply} returns this
 */
proto.io.haveno.protobuffer.GetChatMessagesReply.prototype.clearMessageList = function() {
  return this.setMessageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendChatMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendChatMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendChatMessageRequest}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendChatMessageRequest;
  return proto.io.haveno.protobuffer.SendChatMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendChatMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendChatMessageRequest}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendChatMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendChatMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string trade_id = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendChatMessageRequest} returns this
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendChatMessageRequest} returns this
 */
proto.io.haveno.protobuffer.SendChatMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendChatMessageReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendChatMessageReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendChatMessageReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendChatMessageReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendChatMessageReply}
 */
proto.io.haveno.protobuffer.SendChatMessageReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendChatMessageReply;
  return proto.io.haveno.protobuffer.SendChatMessageReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendChatMessageReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendChatMessageReply}
 */
proto.io.haveno.protobuffer.SendChatMessageReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendChatMessageReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendChatMessageReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendChatMessageReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendChatMessageReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.TradeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.TradeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TradeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    offer: (f = msg.getOffer()) && proto.io.haveno.protobuffer.OfferInfo.toObject(includeInstance, f),
    tradeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shortId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, 0),
    role: jspb.Message.getFieldWithDefault(msg, 5, ""),
    takerFee: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    takerFeeTxId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    payoutTxId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 9, "0"),
    buyerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    sellerSecurityDeposit: jspb.Message.getFieldWithDefault(msg, 11, "0"),
    price: jspb.Message.getFieldWithDefault(msg, 12, ""),
    arbitratorNodeAddress: jspb.Message.getFieldWithDefault(msg, 13, ""),
    tradePeerNodeAddress: jspb.Message.getFieldWithDefault(msg, 14, ""),
    state: jspb.Message.getFieldWithDefault(msg, 15, ""),
    phase: jspb.Message.getFieldWithDefault(msg, 16, ""),
    periodState: jspb.Message.getFieldWithDefault(msg, 17, ""),
    payoutState: jspb.Message.getFieldWithDefault(msg, 18, ""),
    disputeState: jspb.Message.getFieldWithDefault(msg, 19, ""),
    isDepositsPublished: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    isDepositsConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isDepositsUnlocked: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    isPaymentSent: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    isPaymentReceived: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    isPayoutPublished: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    isPayoutConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    isPayoutUnlocked: jspb.Message.getBooleanFieldWithDefault(msg, 27, false),
    isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    contractAsJson: jspb.Message.getFieldWithDefault(msg, 29, ""),
    contract: (f = msg.getContract()) && proto.io.haveno.protobuffer.ContractInfo.toObject(includeInstance, f),
    tradeVolume: jspb.Message.getFieldWithDefault(msg, 31, ""),
    makerDepositTxId: jspb.Message.getFieldWithDefault(msg, 32, ""),
    takerDepositTxId: jspb.Message.getFieldWithDefault(msg, 33, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.TradeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.TradeInfo;
  return proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.TradeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.TradeInfo}
 */
proto.io.haveno.protobuffer.TradeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.OfferInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.OfferInfo.deserializeBinaryFromReader);
      msg.setOffer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTakerFee(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeTxId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutTxId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAmount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBuyerSecurityDeposit(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSellerSecurityDeposit(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorNodeAddress(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradePeerNodeAddress(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhase(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeriodState(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayoutState(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisputeState(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsPublished(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsConfirmed(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDepositsUnlocked(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentSent(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPaymentReceived(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutPublished(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutConfirmed(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPayoutUnlocked(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAsJson(value);
      break;
    case 30:
      var value = new proto.io.haveno.protobuffer.ContractInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.ContractInfo.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeVolume(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerDepositTxId(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerDepositTxId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.TradeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.TradeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.OfferInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShortId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTakerFee();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getTakerFeeTxId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPayoutTxId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAmount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
  f = message.getBuyerSecurityDeposit();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getSellerSecurityDeposit();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      11,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getArbitratorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTradePeerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPhase();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPeriodState();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPayoutState();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getDisputeState();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIsDepositsPublished();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getIsDepositsConfirmed();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsDepositsUnlocked();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getIsPaymentSent();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getIsPaymentReceived();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getIsPayoutPublished();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getIsPayoutConfirmed();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getIsPayoutUnlocked();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getContractAsJson();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.io.haveno.protobuffer.ContractInfo.serializeBinaryToWriter
    );
  }
  f = message.getTradeVolume();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getMakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getTakerDepositTxId();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
};


/**
 * optional OfferInfo offer = 1;
 * @return {?proto.io.haveno.protobuffer.OfferInfo}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getOffer = function() {
  return /** @type{?proto.io.haveno.protobuffer.OfferInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.OfferInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.OfferInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
*/
proto.io.haveno.protobuffer.TradeInfo.prototype.setOffer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.clearOffer = function() {
  return this.setOffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.hasOffer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string trade_id = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTradeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTradeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string short_id = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getShortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setShortId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 date = 4;
 * @return {number}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string role = 5;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setRole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 taker_fee = 6;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTakerFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTakerFee = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional string taker_fee_tx_id = 7;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTakerFeeTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTakerFeeTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string payout_tx_id = 8;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getPayoutTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setPayoutTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 amount = 9;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


/**
 * optional uint64 buyer_security_deposit = 10;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getBuyerSecurityDeposit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setBuyerSecurityDeposit = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint64 seller_security_deposit = 11;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getSellerSecurityDeposit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setSellerSecurityDeposit = function(value) {
  return jspb.Message.setProto3StringIntField(this, 11, value);
};


/**
 * optional string price = 12;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string arbitrator_node_address = 13;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getArbitratorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setArbitratorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string trade_peer_node_address = 14;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTradePeerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTradePeerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string state = 15;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string phase = 16;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string period_state = 17;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getPeriodState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setPeriodState = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string payout_state = 18;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getPayoutState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setPayoutState = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string dispute_state = 19;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getDisputeState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setDisputeState = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional bool is_deposits_published = 20;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsDepositsPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsDepositsPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool is_deposits_confirmed = 21;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsDepositsConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsDepositsConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_deposits_unlocked = 22;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsDepositsUnlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsDepositsUnlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool is_payment_sent = 23;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsPaymentSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsPaymentSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional bool is_payment_received = 24;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsPaymentReceived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsPaymentReceived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool is_payout_published = 25;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsPayoutPublished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsPayoutPublished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional bool is_payout_confirmed = 26;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsPayoutConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsPayoutConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional bool is_payout_unlocked = 27;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsPayoutUnlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsPayoutUnlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};


/**
 * optional bool is_completed = 28;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 28, value);
};


/**
 * optional string contract_as_json = 29;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getContractAsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setContractAsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional ContractInfo contract = 30;
 * @return {?proto.io.haveno.protobuffer.ContractInfo}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getContract = function() {
  return /** @type{?proto.io.haveno.protobuffer.ContractInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.ContractInfo, 30));
};


/**
 * @param {?proto.io.haveno.protobuffer.ContractInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
*/
proto.io.haveno.protobuffer.TradeInfo.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.hasContract = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional string trade_volume = 31;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTradeVolume = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTradeVolume = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string maker_deposit_tx_id = 32;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getMakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setMakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string taker_deposit_tx_id = 33;
 * @return {string}
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.getTakerDepositTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.TradeInfo} returns this
 */
proto.io.haveno.protobuffer.TradeInfo.prototype.setTakerDepositTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.ContractInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.ContractInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ContractInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerNodeAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sellerNodeAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isBuyerMakerAndSellerTaker: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    makerAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takerAccountId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    makerPaymentAccountPayload: (f = msg.getMakerPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f),
    takerPaymentAccountPayload: (f = msg.getTakerPaymentAccountPayload()) && pb_pb.PaymentAccountPayload.toObject(includeInstance, f),
    makerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerPayoutAddressString: jspb.Message.getFieldWithDefault(msg, 11, ""),
    lockTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    arbitratorNodeAddress: jspb.Message.getFieldWithDefault(msg, 100, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.ContractInfo}
 */
proto.io.haveno.protobuffer.ContractInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.ContractInfo;
  return proto.io.haveno.protobuffer.ContractInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.ContractInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.ContractInfo}
 */
proto.io.haveno.protobuffer.ContractInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerNodeAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellerNodeAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuyerMakerAndSellerTaker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerAccountId(value);
      break;
    case 8:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setMakerPaymentAccountPayload(value);
      break;
    case 9:
      var value = new pb_pb.PaymentAccountPayload;
      reader.readMessage(value,pb_pb.PaymentAccountPayload.deserializeBinaryFromReader);
      msg.setTakerPaymentAccountPayload(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerPayoutAddressString(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerPayoutAddressString(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockTime(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setArbitratorNodeAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.ContractInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.ContractInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.ContractInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSellerNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsBuyerMakerAndSellerTaker();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakerAccountId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
  f = message.getTakerPaymentAccountPayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      pb_pb.PaymentAccountPayload.serializeBinaryToWriter
    );
  }
  f = message.getMakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerPayoutAddressString();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getLockTime();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getArbitratorNodeAddress();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional string buyer_node_address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getBuyerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setBuyerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string seller_node_address = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getSellerNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setSellerNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_buyer_maker_and_seller_taker = 5;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getIsBuyerMakerAndSellerTaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setIsBuyerMakerAndSellerTaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string maker_account_id = 6;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getMakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setMakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string taker_account_id = 7;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getTakerAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setTakerAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional PaymentAccountPayload maker_payment_account_payload = 8;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountPayload}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getMakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 8));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
*/
proto.io.haveno.protobuffer.ContractInfo.prototype.setMakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.clearMakerPaymentAccountPayload = function() {
  return this.setMakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.hasMakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PaymentAccountPayload taker_payment_account_payload = 9;
 * @return {?proto.io.haveno.protobuffer.PaymentAccountPayload}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getTakerPaymentAccountPayload = function() {
  return /** @type{?proto.io.haveno.protobuffer.PaymentAccountPayload} */ (
    jspb.Message.getWrapperField(this, pb_pb.PaymentAccountPayload, 9));
};


/**
 * @param {?proto.io.haveno.protobuffer.PaymentAccountPayload|undefined} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
*/
proto.io.haveno.protobuffer.ContractInfo.prototype.setTakerPaymentAccountPayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.clearTakerPaymentAccountPayload = function() {
  return this.setTakerPaymentAccountPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.hasTakerPaymentAccountPayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string maker_payout_address_string = 10;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getMakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setMakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string taker_payout_address_string = 11;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getTakerPayoutAddressString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setTakerPayoutAddressString = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 lock_time = 12;
 * @return {number}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setLockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string arbitrator_node_address = 100;
 * @return {string}
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.getArbitratorNodeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.ContractInfo} returns this
 */
proto.io.haveno.protobuffer.ContractInfo.prototype.setArbitratorNodeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currencyCode: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetBalancesRequest}
 */
proto.io.haveno.protobuffer.GetBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetBalancesRequest;
  return proto.io.haveno.protobuffer.GetBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetBalancesRequest}
 */
proto.io.haveno.protobuffer.GetBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency_code = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetBalancesRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetBalancesRequest} returns this
 */
proto.io.haveno.protobuffer.GetBalancesRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetBalancesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetBalancesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetBalancesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBalancesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    balances: (f = msg.getBalances()) && proto.io.haveno.protobuffer.BalancesInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetBalancesReply}
 */
proto.io.haveno.protobuffer.GetBalancesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetBalancesReply;
  return proto.io.haveno.protobuffer.GetBalancesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetBalancesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetBalancesReply}
 */
proto.io.haveno.protobuffer.GetBalancesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.BalancesInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.BalancesInfo.deserializeBinaryFromReader);
      msg.setBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetBalancesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetBalancesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetBalancesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetBalancesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalances();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.BalancesInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BalancesInfo balances = 1;
 * @return {?proto.io.haveno.protobuffer.BalancesInfo}
 */
proto.io.haveno.protobuffer.GetBalancesReply.prototype.getBalances = function() {
  return /** @type{?proto.io.haveno.protobuffer.BalancesInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.BalancesInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.BalancesInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetBalancesReply} returns this
*/
proto.io.haveno.protobuffer.GetBalancesReply.prototype.setBalances = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetBalancesReply} returns this
 */
proto.io.haveno.protobuffer.GetBalancesReply.prototype.clearBalances = function() {
  return this.setBalances(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetBalancesReply.prototype.hasBalances = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrSeedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrSeedRequest}
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrSeedRequest;
  return proto.io.haveno.protobuffer.GetXmrSeedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrSeedRequest}
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrSeedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrSeedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrSeedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    seed: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrSeedReply}
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrSeedReply;
  return proto.io.haveno.protobuffer.GetXmrSeedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrSeedReply}
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrSeedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrSeedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeed();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string seed = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.prototype.getSeed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetXmrSeedReply} returns this
 */
proto.io.haveno.protobuffer.GetXmrSeedReply.prototype.setSeed = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest;
  return proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    primaryAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply;
  return proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimaryAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string primary_address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.prototype.getPrimaryAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply} returns this
 */
proto.io.haveno.protobuffer.GetXmrPrimaryAddressReply.prototype.setPrimaryAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest;
  return proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrNewSubaddressReply;
  return proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subaddress = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.prototype.getSubaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetXmrNewSubaddressReply} returns this
 */
proto.io.haveno.protobuffer.GetXmrNewSubaddressReply.prototype.setSubaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrTxsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsRequest}
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrTxsRequest;
  return proto.io.haveno.protobuffer.GetXmrTxsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsRequest}
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrTxsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrTxsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetXmrTxsReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: jspb.Message.toObjectList(msg.getTxsList(),
    proto.io.haveno.protobuffer.XmrTx.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsReply}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetXmrTxsReply;
  return proto.io.haveno.protobuffer.GetXmrTxsReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsReply}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.XmrTx;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrTx.deserializeBinaryFromReader);
      msg.addTxs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetXmrTxsReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetXmrTxsReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.XmrTx.serializeBinaryToWriter
    );
  }
};


/**
 * repeated XmrTx txs = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.XmrTx>}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.XmrTx>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.XmrTx, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.XmrTx>} value
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsReply} returns this
*/
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.XmrTx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.XmrTx}
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.XmrTx, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetXmrTxsReply} returns this
 */
proto.io.haveno.protobuffer.GetXmrTxsReply.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.XmrTx.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.XmrTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.XmrTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isConfirmed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    incomingTransfersList: jspb.Message.toObjectList(msg.getIncomingTransfersList(),
    proto.io.haveno.protobuffer.XmrIncomingTransfer.toObject, includeInstance),
    outgoingTransfer: (f = msg.getOutgoingTransfer()) && proto.io.haveno.protobuffer.XmrOutgoingTransfer.toObject(includeInstance, f),
    metadata: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.XmrTx}
 */
proto.io.haveno.protobuffer.XmrTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.XmrTx;
  return proto.io.haveno.protobuffer.XmrTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.XmrTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.XmrTx}
 */
proto.io.haveno.protobuffer.XmrTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConfirmed(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLocked(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = new proto.io.haveno.protobuffer.XmrIncomingTransfer;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader);
      msg.addIncomingTransfers(value);
      break;
    case 8:
      var value = new proto.io.haveno.protobuffer.XmrOutgoingTransfer;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader);
      msg.setOutgoingTransfer(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.XmrTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.XmrTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsConfirmed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getIncomingTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.io.haveno.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter
    );
  }
  f = message.getOutgoingTransfer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.io.haveno.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fee = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_confirmed = 3;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getIsConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setIsConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_locked = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getIsLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setIsLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint64 height = 5;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 timestamp = 6;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated XmrIncomingTransfer incoming_transfers = 7;
 * @return {!Array<!proto.io.haveno.protobuffer.XmrIncomingTransfer>}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getIncomingTransfersList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.XmrIncomingTransfer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.XmrIncomingTransfer, 7));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.XmrIncomingTransfer>} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
*/
proto.io.haveno.protobuffer.XmrTx.prototype.setIncomingTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.XmrIncomingTransfer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.addIncomingTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.io.haveno.protobuffer.XmrIncomingTransfer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.clearIncomingTransfersList = function() {
  return this.setIncomingTransfersList([]);
};


/**
 * optional XmrOutgoingTransfer outgoing_transfer = 8;
 * @return {?proto.io.haveno.protobuffer.XmrOutgoingTransfer}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getOutgoingTransfer = function() {
  return /** @type{?proto.io.haveno.protobuffer.XmrOutgoingTransfer} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.XmrOutgoingTransfer, 8));
};


/**
 * @param {?proto.io.haveno.protobuffer.XmrOutgoingTransfer|undefined} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
*/
proto.io.haveno.protobuffer.XmrTx.prototype.setOutgoingTransfer = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.clearOutgoingTransfer = function() {
  return this.setOutgoingTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.hasOutgoingTransfer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string metadata = 9;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrTx.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrTx} returns this
 */
proto.io.haveno.protobuffer.XmrTx.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.XmrDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.XmrDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.XmrDestination}
 */
proto.io.haveno.protobuffer.XmrDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.XmrDestination;
  return proto.io.haveno.protobuffer.XmrDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.XmrDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.XmrDestination}
 */
proto.io.haveno.protobuffer.XmrDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.XmrDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.XmrDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrDestination} returns this
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrDestination} returns this
 */
proto.io.haveno.protobuffer.XmrDestination.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.XmrIncomingTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.XmrIncomingTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subaddressIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    numSuggestedConfirmations: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.XmrIncomingTransfer;
  return proto.io.haveno.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.XmrIncomingTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccountIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSubaddressIndex(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumSuggestedConfirmations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.XmrIncomingTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubaddressIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNumSuggestedConfirmations();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string amount = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 account_index = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 subaddress_index = 3;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.getSubaddressIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.setSubaddressIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 num_suggested_confirmations = 5;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.getNumSuggestedConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrIncomingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrIncomingTransfer.prototype.setNumSuggestedConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.XmrOutgoingTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    subaddressIndicesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.io.haveno.protobuffer.XmrDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.XmrOutgoingTransfer;
  return proto.io.haveno.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccountIndex(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSubaddressIndices(values[i]);
      }
      break;
    case 4:
      var value = new proto.io.haveno.protobuffer.XmrDestination;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrDestination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSubaddressIndicesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.io.haveno.protobuffer.XmrDestination.serializeBinaryToWriter
    );
  }
};


/**
 * optional string amount = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 account_index = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.getAccountIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.setAccountIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int32 subaddress_indices = 3;
 * @return {!Array<number>}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.getSubaddressIndicesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.setSubaddressIndicesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.addSubaddressIndices = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.clearSubaddressIndicesList = function() {
  return this.setSubaddressIndicesList([]);
};


/**
 * repeated XmrDestination destinations = 4;
 * @return {!Array<!proto.io.haveno.protobuffer.XmrDestination>}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.getDestinationsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.XmrDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.XmrDestination, 4));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.XmrDestination>} value
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
*/
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.setDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.XmrDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.XmrDestination}
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.io.haveno.protobuffer.XmrDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.XmrOutgoingTransfer} returns this
 */
proto.io.haveno.protobuffer.XmrOutgoingTransfer.prototype.clearDestinationsList = function() {
  return this.setDestinationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateXmrTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationsList: jspb.Message.toObjectList(msg.getDestinationsList(),
    proto.io.haveno.protobuffer.XmrDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxRequest}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateXmrTxRequest;
  return proto.io.haveno.protobuffer.CreateXmrTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxRequest}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.XmrDestination;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrDestination.deserializeBinaryFromReader);
      msg.addDestinations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateXmrTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.XmrDestination.serializeBinaryToWriter
    );
  }
};


/**
 * repeated XmrDestination destinations = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.XmrDestination>}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.getDestinationsList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.XmrDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.XmrDestination, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.XmrDestination>} value
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxRequest} returns this
*/
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.setDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.XmrDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.XmrDestination}
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.addDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.XmrDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxRequest} returns this
 */
proto.io.haveno.protobuffer.CreateXmrTxRequest.prototype.clearDestinationsList = function() {
  return this.setDestinationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.CreateXmrTxReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: (f = msg.getTx()) && proto.io.haveno.protobuffer.XmrTx.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxReply}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.CreateXmrTxReply;
  return proto.io.haveno.protobuffer.CreateXmrTxReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxReply}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.XmrTx;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrTx.deserializeBinaryFromReader);
      msg.setTx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.CreateXmrTxReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.CreateXmrTxReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.XmrTx.serializeBinaryToWriter
    );
  }
};


/**
 * optional XmrTx tx = 1;
 * @return {?proto.io.haveno.protobuffer.XmrTx}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.getTx = function() {
  return /** @type{?proto.io.haveno.protobuffer.XmrTx} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.XmrTx, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.XmrTx|undefined} value
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxReply} returns this
*/
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.CreateXmrTxReply} returns this
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.clearTx = function() {
  return this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.CreateXmrTxReply.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RelayXmrTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxRequest}
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RelayXmrTxRequest;
  return proto.io.haveno.protobuffer.RelayXmrTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxRequest}
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RelayXmrTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string metadata = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.prototype.getMetadata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxRequest} returns this
 */
proto.io.haveno.protobuffer.RelayXmrTxRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RelayXmrTxReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxReply}
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RelayXmrTxReply;
  return proto.io.haveno.protobuffer.RelayXmrTxReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxReply}
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RelayXmrTxReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RelayXmrTxReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RelayXmrTxReply} returns this
 */
proto.io.haveno.protobuffer.RelayXmrTxReply.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetAddressBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceRequest}
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetAddressBalanceRequest;
  return proto.io.haveno.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceRequest}
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceRequest} returns this
 */
proto.io.haveno.protobuffer.GetAddressBalanceRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetAddressBalanceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfo: (f = msg.getAddressBalanceInfo()) && proto.io.haveno.protobuffer.AddressBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceReply}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetAddressBalanceReply;
  return proto.io.haveno.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceReply}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.setAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetAddressBalanceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressBalanceInfo address_balance_info = 1;
 * @return {?proto.io.haveno.protobuffer.AddressBalanceInfo}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.getAddressBalanceInfo = function() {
  return /** @type{?proto.io.haveno.protobuffer.AddressBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.AddressBalanceInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceReply} returns this
*/
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.setAddressBalanceInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.GetAddressBalanceReply} returns this
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.clearAddressBalanceInfo = function() {
  return this.setAddressBalanceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.GetAddressBalanceReply.prototype.hasAddressBalanceInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SendBtcRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SendBtcRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendBtcRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txFeeRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest}
 */
proto.io.haveno.protobuffer.SendBtcRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SendBtcRequest;
  return proto.io.haveno.protobuffer.SendBtcRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SendBtcRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest}
 */
proto.io.haveno.protobuffer.SendBtcRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxFeeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SendBtcRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SendBtcRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SendBtcRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest} returns this
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest} returns this
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tx_fee_rate = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.getTxFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest} returns this
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.setTxFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string memo = 4;
 * @return {string}
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SendBtcRequest} returns this
 */
proto.io.haveno.protobuffer.SendBtcRequest.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetFundingAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesRequest}
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetFundingAddressesRequest;
  return proto.io.haveno.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesRequest}
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetFundingAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.GetFundingAddressesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressBalanceInfoList: jspb.Message.toObjectList(msg.getAddressBalanceInfoList(),
    proto.io.haveno.protobuffer.AddressBalanceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesReply}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.GetFundingAddressesReply;
  return proto.io.haveno.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesReply}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.AddressBalanceInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader);
      msg.addAddressBalanceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.GetFundingAddressesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressBalanceInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.io.haveno.protobuffer.AddressBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AddressBalanceInfo address_balance_info = 1;
 * @return {!Array<!proto.io.haveno.protobuffer.AddressBalanceInfo>}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.getAddressBalanceInfoList = function() {
  return /** @type{!Array<!proto.io.haveno.protobuffer.AddressBalanceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.io.haveno.protobuffer.AddressBalanceInfo, 1));
};


/**
 * @param {!Array<!proto.io.haveno.protobuffer.AddressBalanceInfo>} value
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesReply} returns this
*/
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.setAddressBalanceInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.io.haveno.protobuffer.AddressBalanceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo}
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.addAddressBalanceInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.haveno.protobuffer.AddressBalanceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.io.haveno.protobuffer.GetFundingAddressesReply} returns this
 */
proto.io.haveno.protobuffer.GetFundingAddressesReply.prototype.clearAddressBalanceInfoList = function() {
  return this.setAddressBalanceInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordRequest}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetWalletPasswordRequest;
  return proto.io.haveno.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordRequest}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_password = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordRequest} returns this
 */
proto.io.haveno.protobuffer.SetWalletPasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.SetWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordReply}
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.SetWalletPasswordReply;
  return proto.io.haveno.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.SetWalletPasswordReply}
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.SetWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.SetWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RemoveWalletPasswordRequest;
  return proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.RemoveWalletPasswordRequest} returns this
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.RemoveWalletPasswordReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.RemoveWalletPasswordReply;
  return proto.io.haveno.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.RemoveWalletPasswordReply}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.RemoveWalletPasswordReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.RemoveWalletPasswordReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.LockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.LockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.LockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.LockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.LockWalletRequest}
 */
proto.io.haveno.protobuffer.LockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.LockWalletRequest;
  return proto.io.haveno.protobuffer.LockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.LockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.LockWalletRequest}
 */
proto.io.haveno.protobuffer.LockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.LockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.LockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.LockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.LockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.LockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.LockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.LockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.LockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.LockWalletReply}
 */
proto.io.haveno.protobuffer.LockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.LockWalletReply;
  return proto.io.haveno.protobuffer.LockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.LockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.LockWalletReply}
 */
proto.io.haveno.protobuffer.LockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.LockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.LockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.LockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.LockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.UnlockWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.UnlockWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.UnlockWalletRequest}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.UnlockWalletRequest;
  return proto.io.haveno.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.UnlockWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.UnlockWalletRequest}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.UnlockWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.UnlockWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 timeout = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.UnlockWalletRequest} returns this
 */
proto.io.haveno.protobuffer.UnlockWalletRequest.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.UnlockWalletReply.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.UnlockWalletReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.UnlockWalletReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnlockWalletReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.UnlockWalletReply}
 */
proto.io.haveno.protobuffer.UnlockWalletReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.UnlockWalletReply;
  return proto.io.haveno.protobuffer.UnlockWalletReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.UnlockWalletReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.UnlockWalletReply}
 */
proto.io.haveno.protobuffer.UnlockWalletReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.UnlockWalletReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.UnlockWalletReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.UnlockWalletReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.UnlockWalletReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.BalancesInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.BalancesInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BalancesInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    btc: (f = msg.getBtc()) && proto.io.haveno.protobuffer.BtcBalanceInfo.toObject(includeInstance, f),
    xmr: (f = msg.getXmr()) && proto.io.haveno.protobuffer.XmrBalanceInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.BalancesInfo}
 */
proto.io.haveno.protobuffer.BalancesInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.BalancesInfo;
  return proto.io.haveno.protobuffer.BalancesInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.BalancesInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.BalancesInfo}
 */
proto.io.haveno.protobuffer.BalancesInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.io.haveno.protobuffer.BtcBalanceInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader);
      msg.setBtc(value);
      break;
    case 2:
      var value = new proto.io.haveno.protobuffer.XmrBalanceInfo;
      reader.readMessage(value,proto.io.haveno.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader);
      msg.setXmr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.BalancesInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.BalancesInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BalancesInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBtc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.io.haveno.protobuffer.BtcBalanceInfo.serializeBinaryToWriter
    );
  }
  f = message.getXmr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.haveno.protobuffer.XmrBalanceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BtcBalanceInfo btc = 1;
 * @return {?proto.io.haveno.protobuffer.BtcBalanceInfo}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.getBtc = function() {
  return /** @type{?proto.io.haveno.protobuffer.BtcBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.BtcBalanceInfo, 1));
};


/**
 * @param {?proto.io.haveno.protobuffer.BtcBalanceInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.BalancesInfo} returns this
*/
proto.io.haveno.protobuffer.BalancesInfo.prototype.setBtc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.BalancesInfo} returns this
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.clearBtc = function() {
  return this.setBtc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.hasBtc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional XmrBalanceInfo xmr = 2;
 * @return {?proto.io.haveno.protobuffer.XmrBalanceInfo}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.getXmr = function() {
  return /** @type{?proto.io.haveno.protobuffer.XmrBalanceInfo} */ (
    jspb.Message.getWrapperField(this, proto.io.haveno.protobuffer.XmrBalanceInfo, 2));
};


/**
 * @param {?proto.io.haveno.protobuffer.XmrBalanceInfo|undefined} value
 * @return {!proto.io.haveno.protobuffer.BalancesInfo} returns this
*/
proto.io.haveno.protobuffer.BalancesInfo.prototype.setXmr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.io.haveno.protobuffer.BalancesInfo} returns this
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.clearXmr = function() {
  return this.setXmr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.io.haveno.protobuffer.BalancesInfo.prototype.hasXmr = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.BtcBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.BtcBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reservedBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalAvailableBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lockedBalance: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.BtcBalanceInfo;
  return proto.io.haveno.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.BtcBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalAvailableBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLockedBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.BtcBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.BtcBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getReservedBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalAvailableBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLockedBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 available_balance = 1;
 * @return {number}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 reserved_balance = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.getReservedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.setReservedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_available_balance = 3;
 * @return {number}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.getTotalAvailableBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.setTotalAvailableBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 locked_balance = 4;
 * @return {number}
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.getLockedBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.BtcBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.BtcBalanceInfo.prototype.setLockedBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.XmrBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.XmrBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    availableBalance: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    pendingBalance: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    reservedOfferBalance: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    reservedTradeBalance: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.XmrBalanceInfo;
  return proto.io.haveno.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.XmrBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBalance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAvailableBalance(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPendingBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedOfferBalance(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setReservedTradeBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.XmrBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.XmrBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAvailableBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPendingBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getReservedOfferBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getReservedTradeBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
};


/**
 * optional uint64 balance = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 available_balance = 2;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.getAvailableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 pending_balance = 3;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.getPendingBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.setPendingBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 reserved_offer_balance = 4;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.getReservedOfferBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.setReservedOfferBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional uint64 reserved_trade_balance = 5;
 * @return {string}
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.getReservedTradeBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.XmrBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.XmrBalanceInfo.prototype.setReservedTradeBalance = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.haveno.protobuffer.AddressBalanceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.haveno.protobuffer.AddressBalanceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numConfirmations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAddressUnused: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.haveno.protobuffer.AddressBalanceInfo;
  return proto.io.haveno.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.haveno.protobuffer.AddressBalanceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumConfirmations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAddressUnused(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.haveno.protobuffer.AddressBalanceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.haveno.protobuffer.AddressBalanceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumConfirmations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getIsAddressUnused();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 num_confirmations = 3;
 * @return {number}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.getNumConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.setNumConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_address_unused = 4;
 * @return {boolean}
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.getIsAddressUnused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.io.haveno.protobuffer.AddressBalanceInfo} returns this
 */
proto.io.haveno.protobuffer.AddressBalanceInfo.prototype.setIsAddressUnused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.io.haveno.protobuffer);
