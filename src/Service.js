// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SingleAppService = null;
    exports.regAppSercice = function (instance) {
        SingleAppService = instance;
    };
    exports.getAppService = function () {
        return SingleAppService;
    };
});
//# sourceMappingURL=Service.js.map