/// <reference types="react" />
import * as React from "react";
export declare class DomReact<P extends IDomProps<IDomVm>, S extends any> extends React.Component<P, S> {
    render(): React.ReactElement<any>;
    protected pRender(): React.ReactElement<any>;
}
export interface IDomVm {
    domVm: any;
}
export interface IA {
}
export interface IDomProps<T extends IDomVm> {
    Vm: T;
    children(): any;
}
export interface ITestDomVm extends DomVm {
    TestDomVm: string;
}
export declare class DomVm implements IDomVm {
    domVm: any;
    private vv;
}
export interface ITestDomProps extends IDomProps<ITestDomVm> {
}
export declare class TestDomReact extends DomReact<ITestDomProps, any> {
    protected pRender(): React.ReactElement<any>;
}
export declare class TestDomVm extends DomVm implements ITestDomVm {
    TestDomVm: string;
}
export interface ISwitchProps {
    DataValue: any;
}
export declare class SwitchReact extends React.Component<ISwitchProps, any> {
    render(): React.ReactElement<any>;
}
