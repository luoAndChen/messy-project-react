

function messageChannelId() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

var CHECK_PLATFORM = {
  App: function () {
    return navigator.userAgent.match(/ZHENXIE/i) ? true : false;
  },
  Wechat: function () {
    return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
  },
  Android: function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
};

function isIOSWebKit() {

  const aa = window.navigator.userAgent;
  if (aa.indexOf('client-iOS') !== -1) {
    return true;
  } else if (aa.indexOf('ZHENXIE') !== -1) {
    return false;
  }
}

function callMobile(handlerInterface, parameters) {
  let classStr = Object.prototype.toString.call(parameters);
  if (classStr === '[object String]' || classStr === '[object Object]') {
    let param = parameters;
    if (classStr === "[object Object]") {
      param = JSON.stringify(parameters);
    }

    try {
      if (isIOSWebKit()) {
        if (window.webkit !== undefined) {
          window.webkit.messageHandlers[handlerInterface].postMessage(param);
        }
      } else if (isIOSWebKit() === false) {
        window.ecloud[handlerInterface](param);
      }
    } catch (e) {

    }
  }
}

function eampGetUserInfo(callback) {

  var msgChannelId = messageChannelId();
  console.log("----eampGetUserInfo-------:" + msgChannelId);
  document.removeEventListener("receiveGetUserInfo", eampGetUserCallback);
  document.addEventListener("receiveGetUserInfo", eampGetUserCallback);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_userInfo", { callback: "nativeGetUserInfo", msgChannelId: msgChannelId });
}

function eampCustomToolbar(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampCustomToolbar-------:" + msgChannelId);
  document.removeEventListener("eampCustomToolbar", eampCustomToolbarCallback);
  document.addEventListener("eampCustomToolbar", eampCustomToolbarCallback);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_baronload", { data: params, callback: "nativeCustomToolbar", msgChannelId: msgChannelId });
}


function eampCustomToolbarCallback(appResult) {
  console.log("----eampCustomToolbarCallback-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampGoBack(type) {
  callMobile("and_oc_goBack", { type: type });
}

function eampGetUserCallback(appResult) {
  console.log("----eampGetUserCallback-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampUploadMultiFile(files, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampUploadMultiPhoto-------:" + files);
  document.removeEventListener("receiveUploadMultiPhoto", eampUploadMultiPhotoCallback);
  document.addEventListener("receiveUploadMultiPhoto", eampUploadMultiPhotoCallback);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_uploadMultiFile", { callback: "nativeUploadMultiPhoto", msgChannelId: msgChannelId, files: files });
}

function eampUploadMultiPhotoCallback(appResult) {
  console.log("----eampUploadMultiPhotoCallback-------:" + JSON.stringify(appResult));
  var body = appResult.message;
  var channel = body.msgChannelId;
  var callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampShowBigImage(params) {
  callMobile('and_oc_showImage', params);
}




function eampSocialShare(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampSocialShare-------:" + msgChannelId);
  document.removeEventListener("eampSocialShare", eampSocialShareCallBack);
  document.addEventListener("eampSocialShare", eampSocialShareCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_shareToWeiXin", { data: params, callback: "nativeSocialShare", msgChannelId: msgChannelId });
}

function eampSocialShareCallBack(appResult) {
  console.log("----eampSocialShareCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}




function eampGetCurrentLocation(callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampGetCurrentLocation-------:" + msgChannelId);
  document.removeEventListener("eampGetCurrentLocation", eampGetCurrentLocationCallBack);
  document.addEventListener("eampGetCurrentLocation", eampGetCurrentLocationCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_getLocation", { callback: "nativeGetCurrentLocation", msgChannelId: msgChannelId });
}

function eampGetCurrentLocationCallBack(appResult) {
  console.log("----eampGetCurrentLocation-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampChooseAddress(callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampChooseAddress-------:" + msgChannelId);
  document.removeEventListener("eampChooseAddressEvent", eampChooseAddressCallBack);
  document.addEventListener("eampChooseAddressEvent", eampChooseAddressCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_chooseAddress", { callback: "nativeChooseAddress", msgChannelId: msgChannelId });
}

function eampChooseAddressCallBack(appResult) {
  console.log("----eampChooseAddressCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampScanErCode(callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampScanErCode-------:" + msgChannelId);
  document.removeEventListener("eampScanErCodeEvent", eampScanErCodeCallBack);
  document.addEventListener("eampScanErCodeEvent", eampScanErCodeCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_scan", { callback: "nativeScanErCode", msgChannelId: msgChannelId });
}

function eampScanErCodeCallBack(appResult) {
  console.log("----eampScanErCodeCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampChooseContact(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampChooseContact-------:" + msgChannelId);
  document.removeEventListener("eampChooseContactEvent", eampChooseContactCallBack);
  document.addEventListener("eampChooseContactEvent", eampChooseContactCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_chooseContacts", { data: params, callback: "nativeChoosetContact", msgChannelId: msgChannelId });
}

function eampChooseContactCallBack(appResult) {
  console.log("----eampChooseContactCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



function eampTakePhoto(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampTakePhoto-------:" + msgChannelId);
  document.removeEventListener("eampTakePhotoEvent", eampTakePhotoCallBack);
  document.addEventListener("eampTakePhotoEvent", eampTakePhotoCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_takephoto", { data: params, callback: "nativeTakePhoto", msgChannelId: msgChannelId });
}

function eampTakePhotoCallBack(appResult) {
  console.log("----eampTakePhotoCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}


function eampDownLoadFile(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampDownLoadFile-------:" + msgChannelId);
  document.removeEventListener("eampDownloadFileEvent", eampDownLoadFileCallBack);
  document.addEventListener("eampDownloadFileEvent", eampDownLoadFileCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_downloadFile", { data: params, callback: "nativeDownloadFile", msgChannelId: msgChannelId });
}

function eampDownLoadFileCallBack(appResult) {
  console.log("----eampDownLoadFileCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}


function eampChooseFileUpload(callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampChooseFileUpload-------");
  document.removeEventListener("receiveChooseFileUploadEvent", eampChooseFileUploadCallback);
  document.addEventListener("receiveChooseFileUploadEvent", eampChooseFileUploadCallback);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_chooseFile", { callback: "nativeChooseFileUpload", msgChannelId: msgChannelId });
}

function eampChooseFileUploadCallback(appResult) {
  console.log("----eampChooseFileUploadCallback-------:" + JSON.stringify(appResult));
  var body = appResult.message;
  var channel = body.msgChannelId;
  var callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}


function eampOpenFile(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampOpenFile-------:" + msgChannelId);
  document.removeEventListener("eampOpenFileEvent", eampOpenFileCallBack);
  document.addEventListener("eampOpenFileEvent", eampOpenFileCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_openFile", { data: params, callback: "nativeOpenFile", msgChannelId: msgChannelId });
}

function eampOpenFileCallBack(appResult) {
  console.log("----eampOpenFileCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}

function eampText2VoicePlay(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampText2VoicePlay-------:" + msgChannelId);
  document.removeEventListener("eampText2VoicePlayEvent", eampText2VoicePlayCallBack);
  document.addEventListener("eampText2VoicePlayEvent", eampText2VoicePlayCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_start_reading", { data: params, callback: "nativeText2VoicePlay", msgChannelId: msgChannelId });
}

function eampText2VoicePlayCallBack(appResult) {
  console.log("----eampText2VoicePlayCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}



/**
 * @param params （title：标题，pdfUrl：文件链接）
 * @param callback
 */
function eampPreviewerPDF(params) {
  console.log("----eampPreviewerPDF-------:");
  callMobile("and_oc_pdf_preview", params);
}


/**
 * 打开新的网页
 * @param params{url:'',title:''}
 */
function eampOpenNewWebview(params) {
  callMobile('and_oc_open_webview', params);
}



/**
 * 打开新的微应用
 * @param params{uri:'/portal/home/xxx/yyyy',title:'微建议'}
 */
function eampOpenMircoApp(params) {
  callMobile('and_oc_open_micro_app', params);
}

function eampAwakeZTEMeeting(params) {

  callMobile("and_oc_start_meeting", { data: params });

}


/**
 * 选择图片
 * @param params （type：‘1’拍照 ‘2’本地图片‘3’两种都要）
 * @param callback
 */
function eampOperateFixUsers(params, callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampTakePhoto-------:" + msgChannelId);
  document.removeEventListener("eampOperateFixUsersEvent", eampOperateFixUsersCallBack);
  document.addEventListener("eampOperateFixUsersEvent", eampOperateFixUsersCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_operate_fix_user", { data: params, callback: "nativeOperateFixUsers", msgChannelId: msgChannelId });
}

function eampOperateFixUsersCallBack(appResult) {
  console.log("----eampOperateFixUsersCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}


function eampGetFontSize(callback) {
  var msgChannelId = messageChannelId();
  console.log("----eampGetFontSize-------:" + msgChannelId);
  document.removeEventListener("eampGetFontSizeEvent", eampGetFontSizeCallBack);
  document.addEventListener("eampGetFontSizeEvent", eampGetFontSizeCallBack);
  window.callBackChannelMap[msgChannelId] = callback;
  callMobile("and_oc_get_text_lv", { callback: "nativeGetFontSize", msgChannelId: msgChannelId });
}

function eampGetFontSizeCallBack(appResult) {
  console.log("----eampGetFontSizeCallBack-------:" + JSON.stringify(appResult));
  let body = appResult.message;
  let channel = body.msgChannelId;
  let callbackMenthod = window.callBackChannelMap[channel];
  callbackMenthod(body);
}

function eampShowMultiImages(params) {
  callMobile('and_oc_show_multi_images', params);
}

function eampSetKDXFReadingOption(params) {
  var msgChannelId = messageChannelId();
  console.log("----and_oc_reading_option-------:" + msgChannelId);
  callMobile("and_oc_reading_option", { data: params, msgChannelId: msgChannelId });
}

function eampOpenOutLinkWebView(parmas) {
  callMobile('and_oc_open_outlink', parmas);

}

//
// ap	keyword	not_analyzed	操作的应用ID 微应用id
// apn	text	analyzed      操作的应用名称
// opn	text	analyzed	操作用户名称  用户名
// op	keyword	Not analyzed	操作用户ID  用户id
// ty	keyword	not_analyzed	操作类别(登录、功能页面)
//
// oty	keyword	not_analyzed	操作对象类   型（包括微建议,提案，社情民意，资讯，委员工作室，评论，远程协商，热点关注，网络直播）
// ob	keyword	not_analyzed	操作对象ID（例如微建议id）
//
//
// latency	long	Not analyzed	操作耗时（页面停留时长） //号码
// remark	Text	Not analyzed	备用字段
// env	keyword	Not analyzed	环境
// optime	long	Not analyzed	操作时间   //时间戳
// syst	keyword	Not analyzed	系统类型（区分app和web端） 必须小写
// ccid	keyword	Not analyzed	分类机构id
// cid	keyword	Not analyzed	机构id     //数组
// ut	keyword	Not analyzed	操作人角色类型（委员，工作人员，外单位）
// lo	keyword	Not analyzed	（长沙市，省本级）行政区中文名称数组   //数组
function eampRecordNotes(parmas) {
  callMobile('and_oc_recordNotes', parmas);

}
//------------------
//------------------
//------------------
//------------------
//------------------
//------------------
//------------------
//------------------

function nativeUploadMultiPhoto(appRestule) {

  console.log("----nativeChooseMultiPhoto-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("receiveUploadMultiPhoto", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeGetUserInfo(appRestule) {
  console.log("----nativeGetUserInfo-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("receiveGetUserInfo", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}


function nativeCustomToolbar(appRestule) {

  console.log("----nativeChooseMultiPhoto-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampCustomToolbar", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}


function nativeSocialShare(appRestule) {

  console.log("----nativeSocialShare-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampSocialShare", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeGetCurrentLocation(appRestule) {

  console.log("----nativeGetCurrentLocation-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampGetCurrentLocation", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeScanErCode(appRestule) {

  console.log("----nativeScanErCode-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampScanErCodeEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeChooseAddress(appRestule) {

  console.log("----nativeChooseAddress-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampChooseAddressEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeChoosetContact(appRestule) {

  console.log("----nativeChoosetContact-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampChooseContactEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeTakePhoto(appRestule) {

  console.log("----nativeTakePhoto-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampTakePhotoEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeDownloadFile(appRestule) {

  console.log("----nativeTakePhoto-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampDownloadFileEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeOpenFile(appRestule) {

  console.log("----nativeOpenFile-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampOpenFileEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}


function nativeChooseFileUpload(appRestule) {

  console.log("----nativeChooseFileUpload-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("receiveChooseFileUploadEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeOperateFixUsers(appRestule) {

  console.log("----nativeOperateFixUsers-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampOperateFixUsersEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeGetFontSize(appRestule) {

  console.log("----nativeGetFontSize-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampGetFontSizeEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

function nativeText2VoicePlay(appRestule) {

  console.log("----nativeText2VoicePlay-------:" + appRestule);
  var event = document.createEvent('HTMLEvents');
  event.initEvent("eampText2VoicePlayEvent", true, true);
  event.message = appRestule;
  document.dispatchEvent(event);
}

window.callBackChannelMap = {};

var product_config = {
  schema: 'https://',
  host: 'wxwygzs.zxy.hunanzx.gov.cn',
  apps: {
    sqmy: {
      code: "sqmy",
      commentId: "QyFwH3HRTQynyKVgbKD6dg"
    },
    wjy: {
      code: "wjy",
      commentId: "uSLsk4YsQVqxxHeVg0sf0A"
    },
    tpgj: {
      code: "tpgj",
      commentId: "I3KIshdhTL-2ZS7Uk-We5g"
    },
    tian: {
      code: "zxta",
      commentId: "n02Sl__KSKyzjr28F7t9vw"
    },
    wygzs: {
      code: "zxwygzs",
      commentId: "pk1L3JJPTN2FWafTVOR4-w"
    },
    hots: {
      code: "rdgz",
      commentId: "IUKfLBH9RqGpT0UCEdwPhQ"
    },
    lzhd: {
      code: "lzhd",
      commentId: "lki5eTV5l2NglgW5-Bhia"
    },
    portal: {
      code: "portal_app_old",
      commentId: ""
    },
    meeting: {
      code: "ycxs",
      commentId: "HY-XvIoBSBiUeAyC66DlTA"
    },
    datav: {
      code: "bigdata",
      commentId: ""
    },
  }

}

var eApi = {
  eampCustomToolbar: eampCustomToolbar,
  eampGetUserInfo: eampGetUserInfo,
  eampUploadMultiPhoto: eampUploadMultiFile,
  eampShowBigImage: eampShowBigImage,
  eampSocialShare: eampSocialShare,
  eampGetCurrentLocation: eampGetCurrentLocation,
  eampChooseAddress: eampChooseAddress,
  eampScanErCode: eampScanErCode,
  eampChooseContact: eampChooseContact,
  eampTakePhoto: eampTakePhoto,
  eampDownLoadFile: eampDownLoadFile,
  eampChooseFileUpload: eampChooseFileUpload,
  eampOpenFile: eampOpenFile,
  eampPreviewerPDF: eampPreviewerPDF,
  eampOpenNewWebview: eampOpenNewWebview,
  eampOperateFixUsers: eampOperateFixUsers,
  eampGetFontSize: eampGetFontSize,
  eampOpenMircoApp: eampOpenMircoApp,
  eampGoBack: eampGoBack,
  eampShowMultiImages: eampShowMultiImages,
  eampText2VoicePlay: eampText2VoicePlay,
  eampSetKDXFReadingOption: eampSetKDXFReadingOption,
  eampAwakeZTEMeeting: eampAwakeZTEMeeting,
  eampOpenOutLinkWebView: eampOpenOutLinkWebView,
  eampRecordNotes: eampRecordNotes,
  checkPlatform: CHECK_PLATFORM,
  config: product_config
}
// config:develop_config
// config:product_config

window.eApi = eApi;
