var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "./Url", "./Util"], function (require, exports, urlFile, utilFile) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.printLocal = function (html, config) {
        var _html = config && config.Html
            ? config.Html
            : html;
        var host = window.location.host;
        if (config && config.IsLocal) {
            exports._printLocal(_html, config);
        }
        else if (config && config.IsCode) {
            var html_fixed = exports._getHtml(_html, true); // 先对返回的片段做处理，添加样式及其他信息，替换 p 标签
            var html_host = exports._addHost(html_fixed, host); // 再将域名补全
            utilFile.Core.Util.CopyString(html_host);
            exports.codePrint(html_host);
        }
        else {
            exports.htmlPrint(_html);
        }
    };
    exports._addHost = function (html, host) {
        var html1 = html;
        var _host = host || '';
        //alert(_host);
        var html2 = html1.replace(/href="/g, "href =\"//" + _host);
        return html2;
    };
    exports._getHtml = function (html, isIE6) {
        // const html1 = isIE6
        //  ? (html.replace(/inline-block/g, "inline").replace(/<p([^<>]*)>([^<>]*)<\/p>/gi, '<div$1>$2</div>'))
        //  : html;
        //html = html.replace(/<p([^<>]*)>([^<>]*)<\/p>/gi, '<div$1>$2</div>');
        var html1 = html;
        var html2 = isIE6
            ? (html1.replace(/<p /gi, '<div ').replace(/ p>/gi, ' div>').replace(/<p>/gi, '<div>').replace(/<\/p>/gi, '</div>'))
            : html1;
        //    html2 = isIE6
        //         ? (html2.replace(/<textarea /gi, '<div ').replace(/ textarea>/gi, ' div>').replace(/<textarea>/gi, '<div>').replace(/<\/textarea>/gi, '</div>'))
        //         : html;
        var strStyleCSS = "\n   <meta charset=\"utf-8\"/>\n<meta name=\"renderer\" content=\"webkit\"/>\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"/>\n<link rel=\"stylesheet\" href=\" /ts/lib/platform/css/UEdit.css\"/>\n        <link href=\"/ts/lib/font-awesome/font-awesome.css\" rel=\"stylesheet\" />\n        <link href=\"/ts/lib/akCss/animate.css\" rel=\"stylesheet\" />\n        <link href=\"/ts/lib/platform/css/b4-reboot.css\" rel=\"stylesheet\" id=\"skinBt\"/>\n        <link href=\"/ts/lib/platform/css/atawPlatform.css\" rel=\"stylesheet\" id=\"skinPlatform\"/>\n        <link href=\"/ts/lib/mes-iconfont/icon-style.css\" rel=\"stylesheet\" />\n        <link href=\"/ts/lib/akCss/icons/xsdIcon/style.css\" rel=\"stylesheet\">\n        <link href=\"/AtawStatic/lib/01Base/09Css/ataw_bootstrap.css\" rel=\"stylesheet\" />\n        <!--[if lt IE 9]>\n        <script type=\"text/javascript\"  src=\"http://www.ijquery.cn/js/html5shiv.js\"></script>\n        <![endif]-->\n        <style>\n        .uedit.pre-view {\n            background: white;\n            min-height: auto; \n        }\n       .xu-pre-view{\n            background: white;\n            min-height: auto; \n        }\n\nbody {\n background: white;\n            min-height: auto; \n}\n* {\n  font-family:'\u5B8B\u4F53' !important;\n  font-size: 10.5pt !important;\n  line-height:16pt !important;\n\n}\ntextarea{\n    border:0;\n   \n    \n}\n.uedit.pre-view .pre-view-content {\n    margin-top: 0;\n}\n.ue-preview-content{\n    padding-top:0 ;\n    width: 100%;\n    padding: 0;\n}\n\n.uedit.pre-view .pre-view-content hr {\n    border-color:#bdbdbd;\n}\n\n        </style>";
        var _html3 = "<!DOCTYPE html><html>\n    <head>\n    " + strStyleCSS + "\n    </head>\n    <body>\n         <div  class=\"uedit pre-view clearfix\">     \n        <div class=\"uedit pre-view-content ruler\">\n        <!--[if lt IE 6]>\n        <h1 style=\"text-align: center;color:red;\">\u6253\u5370\u663E\u793A\u4E0D\u652F\u6301IE6,\u8BF7\u5347\u7EA7\u5230IE8</h1>\n        <![endif]-->\n        <!--[if lt IE 7]>\n        <h1 style=\"text-align: center;color:red;\">\u6253\u5370\u663E\u793A\u4E0D\u652F\u6301IE7,\u8BF7\u5347\u7EA7\u5230IE8</h1>\n        <![endif]-->\n            <div class=\"mrContent ue-preview-content\" id=\"ACT-DIV-SHELL\">" + html2 + "</div>\n        </div></div></body></html>\n    ";
        return _html3;
    };
    var _printTxt = function (LODOP, footerText, html, title, headHeight) {
        if (title === void 0) { title = ""; }
        if (headHeight === void 0) { headHeight = 65; }
        var _html = exports._getHtml(html, true);
        if (title && title.indexOf("<") == -1) {
            title = "<div class=\"header\" style=\"width:96%;max-width:760px;height:auto;min-height:76px;margin:0 auto;padding:0 2%;\">\n                 <div class=\"title\" style=\"width:100%;margin-bottom:8px;color:#000;font-size:24px;text-align:center;line-height:1.2;\">" + title + "</div>\n               </div>";
            headHeight = 55;
        }
        LODOP.PRINT_INITA(10, 10, 754, 453, "打印控件功能演示_Lodop功能_多页文档123");
        LODOP.ADD_PRINT_HTM(0, 30, 660, headHeight, title);
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
        LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
        LODOP.ADD_PRINT_LINE(headHeight + 1, "4%", headHeight, "92%", 0, 1);
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
        LODOP.SET_PRINT_STYLEA(0, "Horient", 3);
        //ADD_PRINT_HTML(Top,Left,Width,Height, strHtmlContent)
        LODOP.ADD_PRINT_HTM(headHeight + 5 + 3, 30, 660, 453 - 29 - headHeight - 31 - 3 - 50, _html);
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 4);
        LODOP.SET_PRINT_STYLEA(0, "Horient", 3);
        LODOP.SET_PRINT_STYLEA(0, "Vorient", 3);
        LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", 1);
        LODOP.ADD_PRINT_LINE(414 - 35, "4%", 413 - 35, "92%", 0, 1);
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
        LODOP.SET_PRINT_STYLEA(0, "Horient", 3);
        LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);
        LODOP.ADD_PRINT_TEXT(421 - 35, "5%", 144, 15, footerText);
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
        LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);
        LODOP.ADD_PRINT_TEXT(421 - 35, 542, 165, 15, "第#页/共&页");
        LODOP.SET_PRINT_STYLEA(0, "ItemType", 2);
        LODOP.SET_PRINT_STYLEA(0, "Horient", 1);
        LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);
    };
    exports._printLocal = function (html, config) {
        var _config = __assign({
            IsImmediately: false,
            FooterText: "信使大平台出品",
            PageNum: 1
        }, config);
        utilFile
            .Core
            .Util
            .AsyncJs(["http://localhost:8000/CLodopfuncs.js?name=CLODOPA"], function (a) {
            var LODOP = window["CLODOPA"];
            var strHTML = html;
            LODOP.PRINT_INITA(10, 10, 754, 453, _config.FooterText);
            LODOP.SET_PRINT_MODE("PRINT_DUPLEX", 2);
            if (_config.IsGoon) {
                LODOP.SET_PRINT_MODE("PRINT_DEFAULTSOURCE", 4);
                LODOP.SET_PRINT_MODE("PRINT_START_PAGE", _config.PageNum);
            }
            var strFormHtml = strHTML;
            _printTxt(LODOP, config.FooterText, strFormHtml, config.Title, config.HeadHeight);
            if (_config.IsImmediately) {
                try {
                    LODOP.PREVIEW();
                    utilFile
                        .Core
                        .Util
                        .Noty("已经向打印机发生请求，请注意...");
                }
                catch (vvv) {
                    utilFile
                        .Core
                        .Util
                        .Noty("打印请求，发生错误，请联系管理员...");
                }
            }
            else {
                //  LODOP.SET_PREVIEW_WINDOW(0, 0, 0, 760, 540, "");
                LODOP.PREVIEW();
            }
        }, function () {
            alert("打印脚本载入错误....");
        });
    };
    exports.print = function (html) {
        html = exports.stringToHex(html);
        urlFile
            .Core
            .AkPost("/ElRd/PDF/GetHtmlKey", {
            html: html
        }, function (key) {
            $(".ACT-PRINT-IFRAME").remove();
            $("body").append("<iframe class=\"ACT-PRINT-IFRAME\" style=\"display:none;\" src=\"/ElRd/PDF/file?key=" + key + "\" onload=\"this.contentWindow.print();\"   ></iframe>");
        });
    };
    exports.stringToHex = function (str) {
        var val = "";
        for (var i = 0; i < str.length; i++) {
            if (val == "")
                val = str.charCodeAt(i);
            else
                val += "," + str.charCodeAt(i);
        }
        return val;
    };
    exports.elRdPdf = function (elObj, dpi) {
        utilFile
            .Core
            .Util
            .AsyncJs(["/AtawStatic/lib/03Extend/jsPdf/html2canvas.js"], function (b) {
            window["html2canvas"] = b;
            _canvasFun(window["html2canvas"], window["jsPDF"], elObj, dpi);
        });
    };
    //export const htmlPrint = printLocal
    exports.htmlPrint = function (html) {
        var iWidth = 500;
        var iHeight = 300;
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        var win = window.open("/ts/html/css", "弹出窗口", "width=" + iWidth + ", height=" + iHeight + ",top=" + iTop + ",left=" + iLeft + ",toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,alwa" + "ysRaised=yes,depended=yes");
        window["PrintHtmlCacheObj"] = html;
        //win["cssFun"](html);
    };
    exports.codePrint = function (html) {
        // 弹出窗口显示源html代码
        window["PrintHtmlCodeCacheObj"] = html;
        var htmlWindow = window.open("/ts/html/print", "弹出窗口", "width=760, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, alwaysRaised=yes, depended=yes");
        htmlWindow.focus();
    };
    var _canvasFun = function (html2canvas, jspdf, elObj, dpiNum) {
        if (dpiNum === void 0) { dpiNum = 192; }
        //dpiNum= dpiNum ? dpiNum: 192,
        html2canvas(elObj, {
            dpi: dpiNum,
            useCORS: true,
            onrendered: function (canvas) {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 592.28 / contentWidth * contentHeight;
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new jspdf('', 'pt', 'a4');
                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89) 当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                }
                else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                pdf.autoPrint();
                //---------------------------------------------------
                var fPdf = pdf.output("datauristring");
                urlFile
                    .Core
                    .AkPost("/elrd/pdf/SavePdf", {
                    postPdf: fPdf
                }, function (a) {
                    $(".ACT-PRINT-IFRAME").remove();
                    $("body").append("<iframe class=\"ACT-PRINT-IFRAME\" style=\"display:none;\" src=\"/ElRd/PDF/getpdf?key=" + a + "\" onload=\"this.contentWindow.print();\"   ></iframe>");
                });
                // $(".ACT-PRINT-IFRAMEElRd").remove(); $("body").append(`<iframe
                // class="ACT-PRINT-IFRAMEElRd" style="display:none;" src="${fPdf}" ></iframe>`);
            }
        });
    };
});
//# sourceMappingURL=PrintUtil.js.map