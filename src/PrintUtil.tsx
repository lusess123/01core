import urlFile = require("./Url");
import utilFile = require("./Util");

export interface IPrintLocal {
    IsImmediately?: boolean;
    FooterText?: string;
    IsGoon?: boolean;
    PageNum?: number;
    IsLocal?: boolean;
    Title?: string;
    HeadHeight?: number;
    Html?: string;
    IsCode?: boolean;
}

export const printLocal = function (html : string, config?: IPrintLocal) : void {

    const _html = config && config.Html
        ? config.Html
        : html;

    const host = window.location.host;

    if (config && config.IsLocal) {
        _printLocal(_html, config);
    } else if (config && config.IsCode) {
        const html_fixed = _getHtml(_html, true) // 先对返回的片段做处理，添加样式及其他信息，替换 p 标签
        
        const html_host = _addHost(html_fixed, host) // 再将域名补全
        utilFile.Core.Util.CopyString(html_host);
        codePrint(html_host);
    } else {
        htmlPrint(_html);
    }
};

export const _addHost = function (html: string, host: string) {
    const html1 = html;
    const _host = host || '';
    //alert(_host);
    let html2 = html1.replace(/href="/g, `href ="\/\/${_host}`);
    return html2;
}

export const _getHtml = function (html : string, isIE6?: boolean) : string {

   // const html1 = isIE6
      //  ? (html.replace(/inline-block/g, "inline").replace(/<p([^<>]*)>([^<>]*)<\/p>/gi, '<div$1>$2</div>'))
      //  : html;
    //html = html.replace(/<p([^<>]*)>([^<>]*)<\/p>/gi, '<div$1>$2</div>');
    const html1 = html ;
    let html2 = isIE6
        ? (html1.replace(/<p /gi, '<div ').replace(/ p>/gi, ' div>').replace(/<p>/gi, '<div>').replace(/<\/p>/gi, '</div>'))
        : html1;
//    html2 = isIE6
//         ? (html2.replace(/<textarea /gi, '<div ').replace(/ textarea>/gi, ' div>').replace(/<textarea>/gi, '<div>').replace(/<\/textarea>/gi, '</div>'))
//         : html;
    const strStyleCSS = `
   <meta charset="utf-8"/>
<meta name="renderer" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
<link rel="stylesheet" href=" /ts/lib/platform/css/UEdit.css"/>
        <link href="/ts/lib/font-awesome/font-awesome.css" rel="stylesheet" />
        <link href="/ts/lib/akCss/animate.css" rel="stylesheet" />
        <link href="/ts/lib/platform/css/b4-reboot.css" rel="stylesheet" id="skinBt"/>
        <link href="/ts/lib/platform/css/atawPlatform.css" rel="stylesheet" id="skinPlatform"/>
        <link href="/ts/lib/mes-iconfont/icon-style.css" rel="stylesheet" />
        <link href="/ts/lib/akCss/icons/xsdIcon/style.css" rel="stylesheet">
        <link href="/AtawStatic/lib/01Base/09Css/ataw_bootstrap.css" rel="stylesheet" />
        <!--[if lt IE 9]>
        <script type="text/javascript"  src="http://www.ijquery.cn/js/html5shiv.js"></script>
        <![endif]-->
        <style>
        .uedit.pre-view {
            background: white;
            min-height: auto; 
        }
       .xu-pre-view{
            background: white;
            min-height: auto; 
        }

body {
 background: white;
            min-height: auto; 
}
* {
  font-family:'宋体' !important;
  font-size: 10.5pt !important;
  line-height:16pt !important;

}
textarea{
    border:0;
   
    
}
.uedit.pre-view .pre-view-content {
    margin-top: 0;
}
.ue-preview-content{
    padding-top:0 ;
    width: 100%;
    padding: 0;
}

.uedit.pre-view .pre-view-content hr {
    border-color:#bdbdbd;
}

        </style>`;
    const _html3 = `<!DOCTYPE html><html>
    <head>
    ${strStyleCSS}
    </head>
    <body>
         <div  class="uedit pre-view clearfix">     
        <div class="uedit pre-view-content ruler">
        <!--[if lt IE 6]>
        <h1 style="text-align: center;color:red;">打印显示不支持IE6,请升级到IE8</h1>
        <![endif]-->
        <!--[if lt IE 7]>
        <h1 style="text-align: center;color:red;">打印显示不支持IE7,请升级到IE8</h1>
        <![endif]-->
            <div class="mrContent ue-preview-content" id="ACT-DIV-SHELL">${html2}</div>
        </div></div></body></html>
    `;
    return _html3;
}

const _printTxt = function (LODOP, footerText, html : string, title = "", headHeight : number = 65) {
    const _html = _getHtml(html, true);
    if (title && title.indexOf("<") == -1) {
        title = `<div class="header" style="width:96%;max-width:760px;height:auto;min-height:76px;margin:0 auto;padding:0 2%;">
                 <div class="title" style="width:100%;margin-bottom:8px;color:#000;font-size:24px;text-align:center;line-height:1.2;">${title}</div>
               </div>`;
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
    LODOP.ADD_PRINT_HTM(headHeight + 5 + 3, 30, 660, 453 - 29 - headHeight - 31 - 3-50, _html);
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 4);
    LODOP.SET_PRINT_STYLEA(0, "Horient", 3);
    LODOP.SET_PRINT_STYLEA(0, "Vorient", 3);

    LODOP.SET_PRINT_STYLEA(0, "TextNeatRow", 1);

    LODOP.ADD_PRINT_LINE(414-35, "4%", 413-35, "92%", 0, 1);
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
    LODOP.SET_PRINT_STYLEA(0, "Horient", 3);
    LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);

    LODOP.ADD_PRINT_TEXT(421-35, "5%", 144, 15, footerText);
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 1);
    LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);

    LODOP.ADD_PRINT_TEXT(421-35, 542, 165, 15, "第#页/共&页");
    LODOP.SET_PRINT_STYLEA(0, "ItemType", 2);
    LODOP.SET_PRINT_STYLEA(0, "Horient", 1);
    LODOP.SET_PRINT_STYLEA(0, "Vorient", 1);

}

export const _printLocal = function (html : string, config?: IPrintLocal) : void {
    const _config: IPrintLocal = {
        ...{
            IsImmediately: false,
            FooterText: "信使大平台出品",
            PageNum: 1
        },
        ...config
    };
    utilFile
        .Core
        .Util
        .AsyncJs(["http://localhost:8000/CLodopfuncs.js?name=CLODOPA"], (a) => {

            const LODOP = window["CLODOPA"];
            const strHTML = html;
            LODOP.PRINT_INITA(10, 10, 754, 453, _config.FooterText);

            LODOP.SET_PRINT_MODE("PRINT_DUPLEX", 2);

            if (_config.IsGoon) {
                LODOP.SET_PRINT_MODE("PRINT_DEFAULTSOURCE", 4);
                LODOP.SET_PRINT_MODE("PRINT_START_PAGE", _config.PageNum);
            }

            const strFormHtml = strHTML;

            _printTxt(LODOP, config.FooterText, strFormHtml, config.Title, config.HeadHeight);

            if (_config.IsImmediately) {
                try {
                    LODOP.PREVIEW();
                    utilFile
                        .Core
                        .Util
                        .Noty("已经向打印机发生请求，请注意...");
                } catch (vvv) {
                    utilFile
                        .Core
                        .Util
                        .Noty("打印请求，发生错误，请联系管理员...");
                }

            } else {
                //  LODOP.SET_PREVIEW_WINDOW(0, 0, 0, 760, 540, "");
                LODOP.PREVIEW();

            }

        }, () => {

            alert("打印脚本载入错误....");
        })

}

export const print = function (html : string) : void {
    html = stringToHex(html);
    urlFile
        .Core
        .AkPost("/ElRd/PDF/GetHtmlKey", {
            html: html
        }, (key : string) => {

            $(".ACT-PRINT-IFRAME").remove();

            $("body").append(`<iframe class="ACT-PRINT-IFRAME" style="display:none;" src="/ElRd/PDF/file?key=${key}" onload="this.contentWindow.print();"   ></iframe>`);

        });

}

export const stringToHex = function (str : string) {

    let val : any = "";
    for (let i = 0; i < str.length; i++) {
        if (val == "") 
            val = str.charCodeAt(i);
        else 
            val += "," + str.charCodeAt(i);
        }
    return val;
}

export const elRdPdf = function (elObj : JQuery, dpi?: number) {

    utilFile
        .Core
        .Util
        .AsyncJs(["/AtawStatic/lib/03Extend/jsPdf/html2canvas.js"], (b) => {
            window["html2canvas"] = b;
            _canvasFun(window["html2canvas"], window["jsPDF"], elObj, dpi)
        })
}

//export const htmlPrint = printLocal

export const htmlPrint = function (html : string) : void {

    const iWidth = 500;
    const iHeight = 300;
    const iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    const iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    const win = window.open("/ts/html/css", "弹出窗口", "width=" + iWidth + ", height=" + iHeight + ",top=" + iTop + ",left=" + iLeft + ",toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,alwa" + "ysRaised=yes,depended=yes");
    window["PrintHtmlCacheObj"] = html;
    //win["cssFun"](html);
}

export const codePrint = function (html: string): void {
    // 弹出窗口显示源html代码
    window["PrintHtmlCodeCacheObj"] = html;
    const htmlWindow = window.open("/ts/html/print", "弹出窗口", "width=760, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, alwaysRaised=yes, depended=yes");
    htmlWindow.focus();
}

const _canvasFun = function (html2canvas : any, jspdf : any, elObj : JQuery, dpiNum : number = 192) {
    //dpiNum= dpiNum ? dpiNum: 192,
    html2canvas(elObj, {
        dpi: dpiNum,
        useCORS: true,
        onrendered: (canvas) => {
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
            } else {
                while (leftHeight > 0) {
                    pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
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
            let fPdf = pdf.output("datauristring");
            urlFile
                .Core
                .AkPost("/elrd/pdf/SavePdf", {
                    postPdf: fPdf
                }, (a) => {

                    $(".ACT-PRINT-IFRAME").remove();

                    $("body").append(`<iframe class="ACT-PRINT-IFRAME" style="display:none;" src="/ElRd/PDF/getpdf?key=${a}" onload="this.contentWindow.print();"   ></iframe>`);
                });
            // $(".ACT-PRINT-IFRAMEElRd").remove(); $("body").append(`<iframe
            // class="ACT-PRINT-IFRAMEElRd" style="display:none;" src="${fPdf}" ></iframe>`);

        }
    })
}