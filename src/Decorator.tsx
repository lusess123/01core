
export namespace Decorator {   //装饰器，标注类和方法

    export interface IDecoratorData {
        Con?: IDecoratorConstructor;
        Pros?: IDecoratorPropertyKey[];
    }

    export interface IDecoratorConstructor {
        doc?: string;
        constructorStr?: string;
        name?: string;
    }

    export interface IDecoratorPropertyKey {
        doc?: string;
        target?: string;
        propertyKey?: string;
        defaultValue?: string;
        propType?: string;
    }

    
    export class Decorator {

        public static DecoratorData: IDecoratorData = { Con: {}, Pros: [] };

        public static DecoratorConList: Decorator.IDecoratorData[];

        public static setDecoratorCon(doc: string) {
            var __this = this;
            return function (constructor: Function, name?: string) {

                var dData = __this.DecoratorData;

                dData.Con = { doc: doc, constructorStr: constructor.toString(), name: name };

                let data: IDecoratorData = { Con: {}, Pros: []};

                if (!Decorator.DecoratorConList) {
                    Decorator.DecoratorConList = [];
                }

                data.Con.doc = dData.Con.doc;
                data.Con.constructorStr = dData.Con.constructorStr;
                data.Con.name = dData.Con.name;


                for (var i = 0; i < dData.Pros.length; i++) {
                    let ApiDataProps: IDecoratorPropertyKey = {};
                    ApiDataProps.doc = dData.Pros[i].doc ? dData.Pros[i].doc : "";
                    ApiDataProps.defaultValue = dData.Pros[i].defaultValue ? dData.Pros[i].defaultValue.toString() : "";
                    ApiDataProps.propertyKey = dData.Pros[i].propertyKey ? dData.Pros[i].propertyKey : "";
                    ApiDataProps.target = dData.Pros[i].target ? dData.Pros[i].target : "";
                    ApiDataProps.propType = dData.Pros[i].propType ? dData.Pros[i].propType : "";
                    data.Pros.push(ApiDataProps);
                }

                Decorator.DecoratorConList.push(data);

                dData.Pros = [];
            }
        }


        public static setDecoratorProps(doc: string,propType?:string,defaultValue?: string) {
            var __this = this;

            return function (target: any, propertyKey: string) {
                //  alert(doc + "  " + target.toString() + " " + propertyKey);
                var dData = __this.DecoratorData;
                dData.Pros.push({ doc: doc, propertyKey: propertyKey, target: target.toString(), propType:propType,defaultValue: defaultValue });
            };
        }


        public static setDecoratorMethod(doc:string) {

            return function (target: Function, key: string, descriptor: any) {

                //var originalMethod = descriptor.value;
                //descriptor.value = function (...args: any[]) {
                //    var a = args.map((a) => { JSON.stringify(a) }).join();
                //    var result = originalMethod.apply(this, args);
                //    var r = JSON.stringify(result);
                //    console.log('Call:${key}(${a})=>${r}');
                //    return result;
                //}

                //return descriptor;
             //   alert(doc + " " + key + " " + descriptor + " " + publicMethod.toString());
                alert();
            }

        }

    }

}







