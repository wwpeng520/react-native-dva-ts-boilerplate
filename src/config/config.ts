/**
 * 项目配置文件
 */

const config = {
    APP_NAME: "微粉兔",
    APP_VERSION: "1.0.0",
    API_HOST: "http://wftapi.gootile.com",
    // http://xfqapi.tongbuquan.com/v2;
    // http://192.168.0.125:60030;http://127.0.0.1:61000;http://127.0.0.1:60030
    WEB_HOST: "http://wft.gootile.com/",
    WEIBO_APPKEY: "1189520158",
    CLIENT: {
        ID: "app",
        SECRET: "uOa0dbVJfNlba33XfJLG2trMc8zV0DVqQLIaK8yz17tEBh3S4MVEuoJY7z6qFjRY"
        // final:uOa0dbVJfNlba33XfJLG2trMc8zV0DVqQLIaK8yz17tEBh3S4MVEuoJY7z6qFjRY
        // local-tbq:USrorqoYWMRVYwBncHZpPE6RPtUf7OUUgIllaaiA8CzSzLpu4WTJ3DRkAax7ILZU
    },
    FEEDBACK_EMAIL: "feedback_app@gootile.com",
    APP_STORE_ID: "1418866730",
    APP_SCHEME: "tongbuquan432",
    ANDROID_PACKAGE: "com.gootile.weifentu",
    SHARE_TEXT: "这里有你想要的优质微友和货源，点击加入吧",
    QINIU_AK: "kokCFz1Wb7RLNjtBYFp-S2pkFfeC_M13acHHZlhP",
    QINIU_SK: "LYpiclG2oeue3i2jitr8xR_Y0j0lXBHgG8AiQ62J",
    QINIU_BUCKET: "tongbuquan",
    QINIU_BASE_URL: "http://cdn.gootile.com/",
    SOCKET: {
        HOST: "http://10.3.21.207:3030",
        CONFIG: {
            path: "/socket"
        }
    },
    WECHAT_APPID: "wx8448a9a52b7cc711", // wx8448a9a52b7cc711
    QIYU_APPID: "5f8e520193b883b40d8cab09901c2644",
    JPush: {
        AppKey: "769bb8dc3e29662762bb3eeb",
        Secret: "8cd88adfee88600d5eb84c14"
    },
    Umeng_KEY: {
        ANDROID: "5b5c20ada40fa3058c0004c4",
        IOS: "5b5c20f2b27b0a48fa000224"
    }
};

export default config;
