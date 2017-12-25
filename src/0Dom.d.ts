/// <reference types="react" />
import * as React from "react";
import * as eventFile from "./Event";
export declare namespace Core {
    /**
     * 呈现react视图的接口
     *
     * @export
     * @interface IReact React Virtual Dom元素
     */
    interface IReact {
        pSender(): React.ReactElement<any>;
    }
    interface IVm {
        ReactType: any;
    }
    interface IMetaShow {
        Name?: string;
        Content?: string;
        List?: string[];
    }
    interface IFunDic {
        [name: string]: Function;
    }
    interface ITDomFun {
        (dom: DomVm): JSX.Element;
    }
    interface ITDomConfig {
        fun?: ITDomFun;
        nullNode?: React.ReactNode;
    }
    interface IFunctionDict {
        [index: string]: Function[];
    }
    /**
     *
     *
     * @export
     * @class DomReact
     * @extends {React.Component<P, S>}
     * @template P
     * @template S
     * @template A
     */
    class DomReact<P extends DomProps<DomVm>, S extends DomStates, A extends DomAction> extends React.Component<P, S> {
        private fIsNoChangeSign;
        private fEventFun;
        protected pNoNeedUpdate: boolean;
        protected IsNoFirst: boolean;
        protected pIsSetScreenHeight: boolean;
        protected pIsSetScreenMaxHeight: boolean;
        protected ScreenDomName: string;
        protected IsDisposeAll: boolean;
        IsListItem: boolean;
        vM(): DomVm;
        protected pReactEventDict: IFunctionDict;
        listenEvent(event: string, fun: Function): void;
        removeEvent(event?: string, vm?: DomVm): void;
        _T_(a: any, tplName?: string): React.ReactNode;
        protected _tDom(dom: DomVm, config?: ITDomConfig): React.ReactNode;
        setNoNeedUpdate(isNo: boolean): void;
        componentWillMount(): void;
        componentWillUnmount(): void;
        componentDidMount(): void;
        protected pAfterForeUpdate(val: string): void;
        protected pInstall(): void;
        protected pUnInstall(vm?: DomVm): void;
        componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        pComponentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        componentDidUpdate(prevProps: P, prevState: S, prevContext: any): void;
        protected pComponentDidUpdate(prevProps: P, prevState: S, prevContext: any): void;
        protected pFunForceUpdate(callback?: () => any): void;
        protected pBeforRender(nextProps: P, nextState: S, nextContext: any): void;
        shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean;
        protected pDomLoad(): void;
        protected pDispatcher(action: A): void;
        protected pComponentWillMount(): void;
        protected pComponentWillUnmount(): void;
        protected pComponentDidMount(): void;
        protected pSender(): React.ReactElement<any>;
        protected pGetErrorName(): string;
        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
        pComponentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
        protected pGetDom(): Element;
        protected renderErrorObj: any;
        /**
         * react组件自带的呈现函数
         *
         * @returns {React.ReactElement < any >} react元素
         * @memberof DomReact
         */
        render(): React.ReactElement<any>;
    }
    interface IChangeEventFun {
        (val: string, col: DomVm): boolean;
    }
    interface IDomVmChangeHandle {
        (val: string, callback?: () => any): boolean;
    }
    interface ICustomRenderFun {
        (vm: DomVm): React.ReactElement<any>;
    }
    interface ITplReactFun<T> {
        (val: any, tplName: string, vm: T): JSX.Element;
    }
    interface IRegEvent {
        Name: string;
        Fun: Function;
    }
    interface IRegEventDom extends IRegEvent {
        DomObj: DomVm;
    }
    interface IDomVmConfig {
        UniId?: string;
        IsMulit?: boolean;
        Height?: number;
        IsListItem?: boolean;
        DataValue?: string;
        PxWidth?: number;
        PxHeight?: number;
    }
    class DomVm {
        static fEVENT_CHANGE: string;
        ReactType: any;
        IsChange: boolean;
        IsMulit: boolean;
        TempDataValue: string;
        private fNoFirst;
        private fOriValue;
        Id: string;
        Error: string;
        NoNeedUpdate: boolean;
        MetaShowData: IMetaShow;
        protected AppEventFunDic: IFunDic;
        CustomRenderFun: ICustomRenderFun;
        TplFunDic: any;
        UniId: string;
        key: number;
        protected IsDisposeAll: boolean;
        private ffHasDispose;
        IsListItem: boolean;
        IsTabHide: boolean;
        Tag: any;
        private fEmit;
        private fEventBus;
        Height: number;
        PxWidth: number;
        PxHeight: number;
        protected pDataValue: string;
        protected pRegName: string;
        ChangeEventFun: IChangeEventFun;
        getOriValue(): string;
        constructor(config?: IDomVmConfig);
        toChange(): void;
        RegistAppEvent(regData: IRegEvent): void;
        protected pRegistAppEventByDom(regData: IRegEventDom): void;
        onCustomEvent(fun: Function, sender: DomVm): void;
        protected listenAppEvent(name: string, uniId: string, fun: Function): void;
        protected emitAppEvent(name: string, sign: string, ...args: any[]): void;
        getCache<T>(key: string, setFun: () => T): T;
        protected pGetEmit(name?: string): eventFile.Core.IEvent;
        getEmit(name?: string): eventFile.Core.IEvent;
        offEvent_ChangeEmit(fun: Function): void;
        onChangeHandle(fun: IDomVmChangeHandle): Function;
        intoDom(key?: number, ...children: React.ReactNode[]): React.ReactElement<any>;
        intoDomR(reactType: any, key?: number, childrenNode?: React.ReactNode[]): React.ReactElement<any>;
        initDataValue(val: string): void;
        protected pDataValueSet(val: string): boolean;
        forceUpdate(val: string, callback?: () => any): void;
        asyncForceUpdate(val: string): Promise<{}>;
        protected pDataValueGet(): string;
        protected pdataValue(val?: string): string | void;
        dataValue(val?: string): string | void;
        getRegName: () => any;
        setOriValue(val: string): void;
        changeNoForceUpdate(val: string): boolean;
        private fDataValueSet(val, callback?);
        private fDataValueGet();
        vmdataValue(val?: string): string | void;
        vmDataValueGet(): string;
        vmDataValueSet(val: string, callback?: () => any): void;
        dataValueGet(): string;
        dataValueSet(val: string): void;
        reactDataValueGet(): string;
        protected pOnchange(val: string): boolean;
        reactDataValueSet(val: string): boolean;
        protected pDispose(): void;
        dispose(): void;
    }
    class DomProps<T extends DomVm> {
        Vm: T;
        children?: any;
    }
    class DomStates {
    }
    class DomAction {
        DataValue: string;
        Id: string;
        Vm: DomVm;
    }
}
export declare function _reg(name: string, path: string, src?: string): void;
