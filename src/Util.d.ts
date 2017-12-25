import * as dom from "./0Dom";
export declare namespace Core {
    class Util {
        static Cast<T>(obj: any): T;
        static GetClassName(obj: any): string;
        static isTouch: () => boolean;
        static Noty(msg: string, sign?: string): void;
        static ToggleLoading(isS: boolean, fun?: Function): void;
        static ReactByOpt(opt: dom.Core.DomVm): any;
        static AsyncJsPromise(strs: Array<string>): Promise<{}>;
        static AsyncJs(strs: Array<string>, fun: Function, errorFun?: Function): void;
        static HexToString(str: string): string;
        static StringToHex(str: string): string;
        static isDate(str: string): boolean;
        static isDateTime(str: string): boolean;
        static parse(time: any): Date;
        static parseGMT(time: any): Date;
        static parseUTC(time: any): Date;
        static parseCommon(time: any): Date;
        static isString(val: any): boolean;
        static AddUrlFileName: (url: any, wh: any) => string;
        static InterceptStringDisplay: (str: any, num: any) => any;
        static intersection(a: string[], b: string[]): string[];
        private static qc(a);
        static DateFormat(date: Date, fmt: string): string;
        static IsPure(value: any): boolean;
        static CopyString(str: string): any;
    }
}
export declare const reqCss: (strs: string[], fun?: Function) => void;
export interface IParseJsonResult {
    Result?: any;
    IsSucess: boolean;
    SourceString: string;
}
export declare const parseJSON: (strings: string) => IParseJsonResult;
export declare const unmountDom: (dom: Element) => void;
export declare const checkHtml: (htmlStr: string) => boolean;
export declare const getHtmlText: (htmlStr: string) => string;
