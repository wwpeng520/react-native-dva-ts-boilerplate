import { Platform } from "react-native";
import CONFIG from '../config/config';
const keyMirror = require('key-mirror');

const API_HOST = CONFIG.API_HOST;

export const ApiType = keyMirror({
  API_UPLOAD_FILE: null,
  API_JSON: null,
  API_FORM_WWW: null
});

export const VerifyCodeType = {
  LOGIN: "login",
  REGISTER: "register",
  WECHAT: "wechat"
};

export const Scope = {
  LOGIN: "login",
  PASSWORD: "password",
  SMS: "sms",
  PASSWORD_LOGIN: "password_login",
  SMS_LOGIN: "sms_login",
  ENCRYPTED_LOGIN: "encrypted_login",
  REGISTER: "register",
  SMS_REGISTER: "sms_register",
  PATCH_PHONE: "patch_phone",
};

// get/post/patch/delete 等api请求类型
export const DataUseType = keyMirror({
  DATA_GET_ALL: null,
  DATA_GET: null,
  DATA_DELETE: null,
  DATA_PATCH: null,
  DATA_POST: null,
  DATA_SEARCH: null,
  DATA_COUNT: null,
});

export const DataName = {
  VERIFY_CODE: "verify_code",
  USER: "user",
  USER_INIT: "user/init",
  USER_PROFILE: "user/profile",
  USER_PASSWORD: "user/password",
  NOTIFICATION: "notification",
  CONFIG: "config",
  VERSION: "version/update",
};

// API 请求地址
export const API_URL = {
  REGISTER_HELP: getAppDocWebUrl("register_help"),                       // 注册问题
  HELP_URL: getAppDocWebUrl("howto"),                                     // 帮助中心
  FEEDBACK_URL: getAppDocWebUrl("feedback"),                             // 联系客服方式
  PRICARY: getAppDocWebUrl("privacy"),                                   // 关于隐私政策
};

function getAppDocWebUrl(key: string): string {
  return API_HOST + "/app/doc/" + key;
}

function getAppWebUrl(key: string): string {
  return API_HOST + "/app/" + key;
}

function getStaticWebUrl(key: string, type: string = '') {
  if (type) {
    return API_HOST + "/static/" + key + `/${type}.html`;
  }
  return API_HOST + "/static/" + key + "/index.html";
}
