/// <reference types="jquery" />
import * as eventFile from "./Event";
export declare module Core {
    interface IUrlHashEvent {
        (url: string, afterFun?: Function, a?: boolean, config?: IUrlHashEventConfig): void;
    }
    const setUrlFun: (a: string) => {
        Url: string;
        MenuUrl: string;
    };
    interface ISendPageEvent {
        (config: IPageActor, obj: any): void;
    }
    let IsHasSwitchToggle: boolean;
    enum JsActionType {
        Alert = 1,
        Reload = 2,
        Url = 3,
        Object = 4,
        Noty = 5,
        NoGotoUrl = 6,
        JsonObject = 7,
        JsAjaxFun = 8,
        Lock = 50,
    }
    interface IJsResponseResult {
        AKJSRES: string;
        ActionType: JsActionType;
        Content: string;
        Obj: any;
    }
    var ActionCommond: {
        Lock: (res: IJsResponseResult) => void;
        Alert: (res: IJsResponseResult) => void;
        Reload: (res: IJsResponseResult) => void;
        Url: (res: IJsResponseResult) => void;
        Object: (res: IJsResponseResult, callback: any) => any;
        Noty: (res: IJsResponseResult) => void;
        NoGotoUrl: (res: IJsResponseResult) => void;
        JsonObject: (res: IJsResponseResult, callback: any) => any;
        JsAjaxFun: (aRR: IJsResponseResult, obj_Fun: any) => void;
    };
    function logTime(end: Date, begin: Date): number;
    function getTimeNum(dateStr: string): number;
    interface beforeCallBackEvent {
        (data: any): boolean;
    }
    interface beforeStringCallBackEvent {
        (data: string): string;
    }
    interface ICacheFun {
        (key: string, res: string): boolean;
    }
    interface AkPostConfig {
        IsNoOpt?: boolean;
        BeforeCallBackEvent?: beforeCallBackEvent;
        BeforeStringCallBackEvent?: beforeStringCallBackEvent;
        DomainHeader?: string;
        ICacheFun?: ICacheFun;
        IsNoDomainHead?: boolean;
    }
    interface IAkCallBackEvent {
        (data: any, JsonError?: any): void;
    }
    function asyncAkPost(url: string, data: any, settings?: JQueryAjaxSettings, $div?: JQuery, config?: AkPostConfig): Promise<any>;
    function AkPostPromise(url: string, data: any, settings?: JQueryAjaxSettings, $div?: JQuery, config?: AkPostConfig): Promise<any>;
    /**
     * ajax请求封装的方法
     *
     * @export
     * @param {string} url 请求的地址
     * @param {*} data     请求的数据
     * @param {IAkCallBackEvent} callback  回掉的接口
     * @param {JQueryAjaxSettings} [settings]  jquery的ajax设置
     * @param {JQuery} [$div]    jquery 元素，用于呈现的容器
     * @param {AkPostConfig} [config] 请求的配置
     * @returns {JQueryXHR} 返回的jqueryXHR对象
     */
    function AkPost(url: string, data: any, callback: IAkCallBackEvent, settings?: JQueryAjaxSettings, $div?: JQuery, config?: AkPostConfig): JQueryXHR;
    interface IPageActor {
        FromPanelName: string;
        FromModulename: string;
        ToPanelName: string;
        ToModuleName?: string;
        Param1?: string;
        Param2?: string;
        Param3?: string;
    }
    interface IUrlHashEventConfig {
        Param1?: string;
        Param2?: string;
        Param3?: string;
        IsNow?: boolean;
    }
    interface IUrlConfig {
        CanMenuUrl?: boolean;
        AfterFun?: Function;
        noUrl?: boolean;
        Param1?: string;
        Param2?: string;
        Param3?: string;
        IsNow?: boolean;
    }
    interface IPageUrlMode {
        PanelName: string;
        ModuleName: string;
        Param1?: string;
        Param2?: string;
        Param3?: string;
    }
    class AkUrl {
        private static fAkUrl;
        static Current(): AkUrl;
        fEmit: eventFile.Core.IEvent;
        static Fetch(): AkUrl;
        refresh(): void;
        getUrlCode(m: IPageUrlMode): string;
        getPageUrlModel(a: string): IPageUrlMode;
        SendToPage(config: IPageActor, obj: any): void;
        closePage(pageName: string): void;
        openUrlByNoMenu(url: string, name?: string): void;
        setUrl(url: string): void;
        openUrl(url: string, noUrl?: boolean, urlConfig?: IUrlConfig): void;
        private IsStartNoUrl(url, sign);
        bindSendPage(panelName: string, fun: ISendPageEvent): void;
        bindClosePage(panelName: string, fun: Function): void;
        ready(): void;
        bindHashChange(urlEvent: IUrlHashEvent): any;
        offHashChange(fun: Function): void;
        bindReady(urlEvent: IUrlHashEvent): void;
    }
}
