export interface IAppConfigDefine {
    JsAmountconvert: string;
}
export declare class AppContent {
    private static fAppContent;
    AppConfigObj: any;
    private AppContent();
    static Current(): AppContent;
    extendAppConfig(obj: any): void;
    private fGetByInterface<T>();
    getByIApp(): IAppConfigDefine;
    getByInterface<T>(): T;
    appKv(key: string, defaultValue?: string): string;
}
