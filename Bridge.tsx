// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX



export interface IBridge
{
    clearPage(pageName: string): void;
    setFunByPage(pageName: string, funName: string,fun: Function);

}

export const  Zk_Bridge: string = "AKjs_Bridge";

export class Bridge implements  IBridge
{
  
    public setFunByPage(pageName: string, funName:string,fun: Function) {
        window[Zk_Bridge] = window[Zk_Bridge] ? window[Zk_Bridge] : {};
        window[Zk_Bridge][pageName] = window[Zk_Bridge][pageName] ? window[Zk_Bridge][pageName] : {};
        window[Zk_Bridge][pageName][funName] = fun;
    }


    public clearPage(pageName: string) {

        window[Zk_Bridge] = window[Zk_Bridge] ? window[Zk_Bridge] : {};
        if (window[Zk_Bridge][pageName]) {
            for (let n in window[Zk_Bridge][pageName]) {
                delete window[Zk_Bridge][pageName][n];
            }
            delete window[Zk_Bridge][pageName];
        }

    }

}

export const BridgeCurrent: IBridge= new Bridge();