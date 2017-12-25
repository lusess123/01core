/// <reference types="jquery" />
export declare class App {
    private static fAppEvent;
    private static fUniId;
    static getUniId(): number;
    static initAppEvent(event: Core.IEvent): void;
    static GetAppEvent(): Core.IEvent;
}
export declare namespace Core {
    class EventBus {
        private fEmit;
        FetchEmit(): JQuery<HTMLElement>;
        showAllEvent(): IEventInfo[];
        constructor();
        ReactEvent: IEvent;
        VmEvent: IEvent;
        HookEvent: IEvent;
        CustomEvent: IEvent;
        RemoveReactEvent(): void;
    }
    interface IEvent {
        emit(event: string, ...args: any[]): boolean;
        removeAllListeners(event?: string): IEvent;
        listeners(event: string): Function[];
        removeListener(event: string, listener: Function): IEvent;
        addListener(event: string, listener: Function): Function;
        showAllEvent(): IEventInfo[];
        removeAllBusListeners(): void;
        on(event: string, listener: Function): Function;
        off(event: string, listener: Function): IEvent;
        getSubjectByName(name: string): any;
    }
    interface IEventInfo {
        EventName: string;
        FunLength: number;
        EventObj: any;
    }
    interface ISubiectOb {
        Name: string;
        ArgList: any[];
    }
    class BaseEvent implements IEvent {
        private fSubject;
        private fEventBus;
        constructor(eventBus: EventBus, name: string);
        protected fName: string;
        private createName(name);
        showAllEvent(): IEventInfo[];
        removeAllBusListeners(): void;
        getSubjectByName(name: string): any;
        emit(event: string, ...args: any[]): boolean;
        removeAllListeners(event?: string): IEvent;
        listeners(event: string): Function[];
        removeListener(event: string, listener: Function): IEvent;
        addListener(event: string, listener: Function): Function;
        off(event: string, listener: Function): IEvent;
        on(event: string, listener: Function): Function;
    }
}
