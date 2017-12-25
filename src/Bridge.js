// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Zk_Bridge = "AKjs_Bridge";
    var Bridge = /** @class */ (function () {
        function Bridge() {
        }
        Bridge.prototype.setFunByPage = function (pageName, funName, fun) {
            window[exports.Zk_Bridge] = window[exports.Zk_Bridge] ? window[exports.Zk_Bridge] : {};
            window[exports.Zk_Bridge][pageName] = window[exports.Zk_Bridge][pageName] ? window[exports.Zk_Bridge][pageName] : {};
            window[exports.Zk_Bridge][pageName][funName] = fun;
        };
        Bridge.prototype.clearPage = function (pageName) {
            window[exports.Zk_Bridge] = window[exports.Zk_Bridge] ? window[exports.Zk_Bridge] : {};
            if (window[exports.Zk_Bridge][pageName]) {
                for (var n in window[exports.Zk_Bridge][pageName]) {
                    delete window[exports.Zk_Bridge][pageName][n];
                }
                delete window[exports.Zk_Bridge][pageName];
            }
        };
        return Bridge;
    }());
    exports.Bridge = Bridge;
    exports.BridgeCurrent = new Bridge();
});
//# sourceMappingURL=Bridge.js.map