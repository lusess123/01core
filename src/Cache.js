define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseCache = /** @class */ (function () {
        function BaseCache(s) {
            // private static fCache: BaseCache = new BaseCache();
            this.storage = sessionStorage;
            this.storage = s;
        }
        BaseCache.prototype.length = function () {
            return this.storage.length;
        };
        BaseCache.prototype.clear = function () {
            this.storage.clear();
        };
        BaseCache.prototype.getItem = function (key) {
            return this.storage.getItem(key);
        };
        BaseCache.prototype.key = function (index) {
            return this.storage.key(index);
        };
        BaseCache.prototype.removeItem = function (key) {
            this.storage.removeItem(key);
        };
        BaseCache.prototype.setItem = function (key, data) {
            this.storage.setItem(key, data);
        };
        BaseCache.prototype.getKeys = function () {
            var _s = [];
            for (var i = 0; i < this.storage.length; i++) {
                _s.push(this.storage.key(i));
            }
            return _s;
        };
        BaseCache.prototype.getAndSetItem = function (key, setFun) {
            var _val = this.storage.getItem(key);
            if (_val == null) {
                _val = setFun();
                this.storage.setItem(key, _val);
            }
            return _val;
        };
        return BaseCache;
    }());
    exports.BaseCache = BaseCache;
    exports.SessionCache = new BaseCache(sessionStorage);
    exports.AppCache = new BaseCache(localStorage);
});
//# sourceMappingURL=Cache.js.map