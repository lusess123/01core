export interface IBridge {
    clearPage(pageName: string): void;
    setFunByPage(pageName: string, funName: string, fun: Function): any;
}
export declare const Zk_Bridge: string;
export declare class Bridge implements IBridge {
    setFunByPage(pageName: string, funName: string, fun: Function): void;
    clearPage(pageName: string): void;
}
export declare const BridgeCurrent: IBridge;
