var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "react-dom", "jquery"], function (require, exports, ReactDOM, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Core;
    (function (Core) {
        var Util = /** @class */ (function () {
            function Util() {
            }
            Util.Cast = function (obj) {
                var _t = obj;
                return _t;
            };
            Util.GetClassName = function (obj) {
                if (obj["constructor"]) {
                    var s = obj["constructor"];
                    var _s = s.toString();
                    var m = _s.match(/function\s+([^(]+)/);
                    if (m)
                        return m[1];
                    else
                        return "";
                }
                else
                    return (typeof obj).toString();
            };
            Util.Noty = function (msg, sign) {
                var _p = "info"; //warning success error
                if (sign) {
                    _p = sign;
                }
                //var _cal = $.fn.calendar;
                Core.Util.AsyncJs([
                    "/AtawStatic/lib/03Extend/toastr/toastr.min.js",
                    "/AtawStatic/lib/03Extend/toastr/toastr.min.css"
                ], function (toastr) {
                    //  $.sticky("123");
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
                        "positionClass": "toast-bottom-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "5000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    // console.log(msg);
                    toastr[_p](msg);
                    // if (_cal) {
                    //  $.fn.calendar = _cal;
                    // }
                    // alert(msg);
                });
            };
            Util.ToggleLoading = function (isS, fun) {
                // alert(isS);
                if (isS) {
                    //if (window["Ataw"] && window["Ataw"]["msgbox"] && window["Ataw"]["msgbox"]["show"]){
                    //    window["Ataw"]["msgbox"]["show"](" 正在努力加载数据，请稍后..." + "<i class='icon-refresh icon-spin icon-large'></i>", 6);
                    //}
                    if (!fun) {
                        // $("#ACT-Loading").addClass("hide");
                        if ($("#ACT-BootPage").is(":hidden")) {
                            $("#ACT-Loading").show();
                        }
                    }
                    else {
                        if ($("#ACT-BootPage").is(":hidden")) {
                            var _fun = fun;
                            $("#ACT-Loading").show(0, _fun);
                        }
                    }
                    //  $("#ACT-BootPage").show();
                    // $("#ACT-Loading").removeClass("hide");
                }
                else {
                    //if (window["Ataw"] && window["Ataw"]["msgbox"] && window["Ataw"]["msgbox"]["hide"]) {
                    //    window["Ataw"]["msgbox"]["hide"](0);
                    //}
                    $("#ACT-Loading").hide();
                    // $("#ACT-BootPage").hide();
                }
            };
            Util.ReactByOpt = function (opt) {
                return opt.ReactType;
            };
            Util.AsyncJsPromise = function (strs) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (relover, reject) {
                                Util.AsyncJs(strs, function () {
                                    // arguments
                                    relover(arguments);
                                }, reject);
                            })];
                    });
                });
            };
            Util.AsyncJs = function (strs, fun, errorFun) {
                if (window["AsyJsBaseUrl"]) {
                    strs.forEach(function (str) {
                        str = window["AsybcBaseUrl"] + str;
                    });
                }
                strs.forEach(function (url, i) {
                    var _len = url.length;
                    if (_len > 3) {
                        var _css = url.substring(_len - 3);
                        if (_css == "css") {
                            strs[i] = url = "css!" + url;
                        }
                    }
                });
                window["require"](strs, fun, errorFun);
            };
            Util.HexToString = function (str) {
                // var str = this;
                var val = "";
                var arr = str.split(",");
                for (var i = 0; i < arr.length; i++) {
                    val += String.fromCharCode(parseInt(arr[i]));
                }
                return val;
            };
            Util.StringToHex = function (str) {
                // var str = this;
                var val = "";
                for (var i = 0; i < str.length; i++) {
                    if (val == "")
                        val = str.charCodeAt(i);
                    else
                        val += "," + str.charCodeAt(i);
                }
                return val.toString();
            };
            //'hexToString': function () {
            //},
            Util.isDate = function (str) {
                if (str) {
                    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
                    if (r == null)
                        return false;
                    var year = parseInt(r[1]);
                    var month = parseInt(r[3]);
                    var date = parseInt(r[4]);
                    var d = new Date(year, month - 1, date);
                    return (d.getFullYear() == year && (d.getMonth() + 1) == month && d.getDate() == date);
                }
                return false;
            };
            Util.isDateTime = function (str) {
                if (!str)
                    return false;
                var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
                var r = str.match(reg);
                if (r == null)
                    return false;
                var year = parseInt(r[1]);
                var month = parseInt(r[3]);
                var date = parseInt(r[4]);
                var hours = parseInt(r[5]);
                var minutes = parseInt(r[6]);
                var seconds = parseInt(r[7]);
                var d = new Date(year, month - 1, date, hours, minutes, seconds);
                return (d.getFullYear() == year && (d.getMonth() + 1) == month && d.getDate() == date && d.getHours() == hours && d.getMinutes() == minutes && d.getSeconds() == seconds);
            };
            Util.parse = function (time) {
                if (typeof (time) == 'string') {
                    if (time.indexOf('GMT') > 0 || time.indexOf('gmt') > 0 || !isNaN(Date.parse(time))) {
                        return this.parseGMT(time);
                    }
                    else if (time.indexOf('UTC') > 0 || time.indexOf('utc') > 0 || time.indexOf(',') > 0) {
                        return this.parseUTC(time);
                    }
                    else {
                        return this.parseCommon(time);
                    }
                }
                return new Date();
            };
            Util.parseGMT = function (time) {
                return new Date(Date.parse(time));
            };
            Util.parseUTC = function (time) {
                return (new Date(time));
            };
            Util.parseCommon = function (time) {
                var d = time.split(/ |T/), d1 = d.length > 1 ? d[1].split(/[^\d]/) : [0, 0, 0], d0 = d[0].split(/[^\d]/);
                return new Date(d0[0] - 0, d0[1] - 1, d0[2] - 0, d1[0] - 0, d1[1] - 0, d1[2] - 0);
            };
            Util.isString = function (val) {
                return (typeof (val)) == "string";
            };
            Util.intersection = function (a, b) {
                var result = [];
                for (var i = 0; i < b.length; i++) {
                    var temp = b[i];
                    for (var j = 0; j < a.length; j++) {
                        if (temp === a[j]) {
                            result.push(temp);
                            break;
                        }
                    }
                }
                return Util.qc(result);
            };
            Util.qc = function (a) {
                var r = [];
                for (var i = 0; i < a.length; i++) {
                    var flag = true;
                    var temp = a[i];
                    for (var j = 0; j < r.length; j++) {
                        if (temp === r[j]) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        r.push(temp);
                    }
                }
                return r;
            };
            Util.DateFormat = function (date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1,
                    "d+": date.getDate(),
                    "h+": date.getHours(),
                    "m+": date.getMinutes(),
                    "s+": date.getSeconds(),
                    "q+": Math.floor((date.getMonth() + 3) / 3),
                    "S": date.getMilliseconds() //毫秒   
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            };
            Util.IsPure = function (value) {
                return Object.keys(value).length === 0;
            };
            Util.CopyString = function (str) {
                if (window["clipboardData"] && window["clipboardData"].setData) {
                    // 解决 IE 下的问题
                    return window["clipboardData"].setData("Text", str);
                }
                else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var htmlArea = document.createElement("textarea");
                    htmlArea.style.position = 'fixed';
                    htmlArea.style.top = '0px';
                    htmlArea.style.left = '0px';
                    htmlArea.style.width = '2em';
                    htmlArea.style.left = '2em';
                    htmlArea.style.padding = '0px';
                    htmlArea.style.border = '0px';
                    htmlArea.style.outline = '0px';
                    htmlArea.style.boxShadow = 'none';
                    htmlArea.style.background = 'transparent';
                    htmlArea.value = str;
                    document.body.appendChild(htmlArea);
                    htmlArea.select();
                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? '成功' : '失败';
                        alert("\u62F7\u8D1Dhtml" + msg + "\uFF0C\u8BF7\u590D\u5236\u5230\u7F16\u8F91\u5668\u67E5\u770B");
                    }
                    catch (e) {
                        alert("\u62F7\u8D1D" + msg + "\uFF0C\u5C1D\u8BD5\u5176\u4ED6\u6D4F\u89C8\u5668");
                    }
                    finally {
                        document.body.removeChild(htmlArea);
                    }
                }
            };
            Util.isTouch = function () {
                return ('ontouchstart' in window) || window["DocumentTouch"] && document instanceof window["DocumentTouch"];
            };
            //-------------------设置http文件名
            Util.AddUrlFileName = function (url, wh) {
                var _index = url.lastIndexOf(".");
                var _path = url.substring(0, _index);
                var _ext = url.substring(_index, url.length);
                var _f = _path + "_" + wh + _ext;
                return _f + "?f=" + new Date().getTime();
            };
            //------------------名字截取字符串显示点点点
            //str：字符串
            //num：从开始位置保留几个字符
            Util.InterceptStringDisplay = function (str, num) {
                var end = str.length - 1;
                //看是否带扩展名，带了就保留扩展名
                var endExtension = str.lastIndexOf(".");
                end = endExtension == -1 ? end : endExtension;
                //需要被替换成点点点的字符串
                var rStr = str.substring(num, end);
                //返回新的字符串
                return str.replace(rStr, "...");
            };
            return Util;
        }());
        Core.Util = Util;
    })(Core = exports.Core || (exports.Core = {}));
    exports.reqCss = function (strs, fun) {
        if (!fun)
            fun = function () { };
        Core.Util.AsyncJs(strs, fun);
    };
    exports.parseJSON = function (strings) {
        try {
            var _res = $.parseJSON(strings);
            return {
                Result: _res,
                IsSucess: true,
                SourceString: strings
            };
        }
        catch (ex) {
            console.log("... json 转换异常 ...");
            console.log(ex);
            return {
                IsSucess: false,
                SourceString: strings
            };
        }
    };
    exports.unmountDom = function (dom) {
        // $(dom).find("[data-reactroot]").each()
        $(dom).find("[data-reactroot]").each(function (index, colDom) {
            var _$dom = $(colDom).parent();
            var _res = ReactDOM.unmountComponentAtNode(_$dom[0]);
            // alert(_res);
        });
        if (!(typeof ($(dom).attr("data-reactroot")) == "undefined")) {
            var _res = ReactDOM.unmountComponentAtNode($(dom).parent()[0]);
            // alert(_res);
        }
    };
    exports.checkHtml = function (htmlStr) {
        var reg = /<[^>]+>/g;
        return reg.test(htmlStr);
    };
    exports.getHtmlText = function (htmlStr) {
        try {
            if (exports.checkHtml(htmlStr)) {
                return $(htmlStr).text();
            }
            else {
                return htmlStr;
            }
        }
        catch (htmlEx) {
            return htmlStr;
        }
    };
});
//# sourceMappingURL=Util.js.map