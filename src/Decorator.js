define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Decorator;
    (function (Decorator_1) {
        var Decorator = /** @class */ (function () {
            function Decorator() {
            }
            Decorator.setDecoratorCon = function (doc) {
                var __this = this;
                return function (constructor, name) {
                    var dData = __this.DecoratorData;
                    dData.Con = { doc: doc, constructorStr: constructor.toString(), name: name };
                    var data = { Con: {}, Pros: [] };
                    if (!Decorator.DecoratorConList) {
                        Decorator.DecoratorConList = [];
                    }
                    data.Con.doc = dData.Con.doc;
                    data.Con.constructorStr = dData.Con.constructorStr;
                    data.Con.name = dData.Con.name;
                    for (var i = 0; i < dData.Pros.length; i++) {
                        var ApiDataProps = {};
                        ApiDataProps.doc = dData.Pros[i].doc ? dData.Pros[i].doc : "";
                        ApiDataProps.defaultValue = dData.Pros[i].defaultValue ? dData.Pros[i].defaultValue.toString() : "";
                        ApiDataProps.propertyKey = dData.Pros[i].propertyKey ? dData.Pros[i].propertyKey : "";
                        ApiDataProps.target = dData.Pros[i].target ? dData.Pros[i].target : "";
                        ApiDataProps.propType = dData.Pros[i].propType ? dData.Pros[i].propType : "";
                        data.Pros.push(ApiDataProps);
                    }
                    Decorator.DecoratorConList.push(data);
                    dData.Pros = [];
                };
            };
            Decorator.setDecoratorProps = function (doc, propType, defaultValue) {
                var __this = this;
                return function (target, propertyKey) {
                    //  alert(doc + "  " + target.toString() + " " + propertyKey);
                    var dData = __this.DecoratorData;
                    dData.Pros.push({ doc: doc, propertyKey: propertyKey, target: target.toString(), propType: propType, defaultValue: defaultValue });
                };
            };
            Decorator.setDecoratorMethod = function (doc) {
                return function (target, key, descriptor) {
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
                };
            };
            Decorator.DecoratorData = { Con: {}, Pros: [] };
            return Decorator;
        }());
        Decorator_1.Decorator = Decorator;
    })(Decorator = exports.Decorator || (exports.Decorator = {}));
});
//# sourceMappingURL=Decorator.js.map