/// <reference types="jquery" />
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
export declare const printLocal: (html: string, config?: IPrintLocal) => void;
export declare const _addHost: (html: string, host: string) => string;
export declare const _getHtml: (html: string, isIE6?: boolean) => string;
export declare const _printLocal: (html: string, config?: IPrintLocal) => void;
export declare const print: (html: string) => void;
export declare const stringToHex: (str: string) => any;
export declare const elRdPdf: (elObj: JQuery<HTMLElement>, dpi?: number) => void;
export declare const htmlPrint: (html: string) => void;
export declare const codePrint: (html: string) => void;
