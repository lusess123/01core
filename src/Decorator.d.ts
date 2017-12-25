export declare namespace Decorator {
    interface IDecoratorData {
        Con?: IDecoratorConstructor;
        Pros?: IDecoratorPropertyKey[];
    }
    interface IDecoratorConstructor {
        doc?: string;
        constructorStr?: string;
        name?: string;
    }
    interface IDecoratorPropertyKey {
        doc?: string;
        target?: string;
        propertyKey?: string;
        defaultValue?: string;
        propType?: string;
    }
    class Decorator {
        static DecoratorData: IDecoratorData;
        static DecoratorConList: Decorator.IDecoratorData[];
        static setDecoratorCon(doc: string): (constructor: Function, name?: string) => void;
        static setDecoratorProps(doc: string, propType?: string, defaultValue?: string): (target: any, propertyKey: string) => void;
        static setDecoratorMethod(doc: string): (target: Function, key: string, descriptor: any) => void;
    }
}
