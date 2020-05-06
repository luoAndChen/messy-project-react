import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use(createLoading());

// 3. Model
// app.model(require('./models/dict').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

let is_app = window.eApi.checkPlatform.App();

//临时解决线上环境（原生没有更新jssdk）没有此方法的问题
function eampRecordNotes(parmas) {
    window.callMobile('and_oc_recordNotes', parmas);
}
window.eApi.eampRecordNotes = eampRecordNotes;
window.eApi.config.apps.wbg = { code: "wbg", commentId: "t6kI7eHiTfmlG4daJD0wuQ" };

if (is_app) {
    window.eApi.eampGetFontSize((response) => {
        if (response.success === '0') {
            setFontSize(response.data.lv || '1')
        } else {
            setFontSize('1')
        }
    })
} else {
    var static_default_host = "https://wxwygzs.zxy.hunanzx.gov.cn";
    if (window.location.host.indexOf("microapps.ak.c2cloud.cn") === 0 || window.location.host.indexOf("127.0.0.1") > -1) {
        static_default_host = "http://" + window.location.host
    }

    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", static_default_host + "/theme/index" + 1 + ".css");

    var heads = doc.getElementsByTagName("head");
    if (heads.length) {
        heads[0].appendChild(link);
    } else {
        doc.documentElement.appendChild(link);
    }
}


export default app._store; // eslint-disable-line


let setFontSize = (level) => {
    let fontSizeArr = ["0", "1", "2", "3", "4", "5"];
    if (level === undefined || level === null || level === '' || fontSizeArr.indexOf(level) < 0) {
        level = "1";
    }
    var static_default_host = "https://wxwygzs.zxy.hunanzx.gov.cn";
    if (window.location.host.indexOf("microapps.ak.c2cloud.cn") === 0 || window.location.host.indexOf("127.0.0.1") > -1) {
        static_default_host = "http://" + window.location.host
    }

    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", static_default_host + "/theme/index" + level + ".css");

    var heads = doc.getElementsByTagName("head");
    if (heads.length) {
        heads[0].appendChild(link);
    } else {
        doc.documentElement.appendChild(link);
    }
}
