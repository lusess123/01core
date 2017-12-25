/// <reference types="jquery" />
export declare module Core {
    interface IClassMeta {
        RegName: string;
        Author?: string;
        Message?: string;
        BaseType: any;
        InstanceType: any;
        customData?: any;
    }
    function applyNew(ctor: any, args: any[]): any;
    interface IErrorData {
        Path: string;
        error: string;
    }
    interface IInstanceMeta {
        ClassMeta: IClassMeta;
        InstanceObj: any;
    }
    interface IInstanceDict {
        [index: string]: IInstanceMeta;
    }
    interface IClassList {
        [index: string]: IClassMeta;
    }
    interface IIocAsy<T> {
        (obj: T): void;
    }
    interface IRegisterTypeSrcConfig {
        NullFun?: INullFun;
        Args?: any[];
    }
    interface INullFun {
        (regName: string, baseTypeStr: string): void;
    }
    interface IFetchConfig {
        Args?: any[];
    }
    class Ioc {
        private static fIoc;
        static Current(): Ioc;
        IocModel(): IClassList;
        IocSrcModel(): IClassList;
        private fInstanceClassList;
        private fInstanceSrcList;
        RegisterType(regName: string, baseType: any, instaceType: any, customData?: any): void;
        RegisterTypeSrc(regName: string, baseType: any, src: string): void;
        fetchPromise<T>(regName: string, baseType: any, config?: IRegisterTypeSrcConfig): JQuery.Promise<T, any, any>;
        FetchAsyInstance<T>(regName: string, baseType: any, fun: IIocAsy<T>, error?: Function, config?: IRegisterTypeSrcConfig): void;
        private fFetchAsyInstance<T>(regName, baseType, fun, error?, config?);
        private fFetchInstance<T>(regName, baseType, config?);
        FetchInstance<T>(regName: string, baseType: any, config?: IFetchConfig): T;
        static fGetFunName(s: any): any;
        GetTypeList(baseType: any): Array<IClassMeta>;
    }
}
