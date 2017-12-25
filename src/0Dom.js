var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "react", "react-dom", "./Event", "./Ioc", "jquery"], function (require, exports, React, ReactDOM, eventFile, iocFile, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import jqueryExtend = require("./JQueryExtend");
    var Core;
    (function (Core) {
        /**
         *
         *
         * @export
         * @class DomReact
         * @extends {React.Component<P, S>}
         * @template P
         * @template S
         * @template A
         */
        var DomReact = /** @class */ (function (_super) {
            __extends(DomReact, _super);
            function DomReact() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fIsNoChangeSign = false;
                _this.pNoNeedUpdate = false;
                _this.IsNoFirst = false;
                _this.pIsSetScreenHeight = false;
                _this.pIsSetScreenMaxHeight = false;
                _this.ScreenDomName = "";
                _this.IsListItem = false;
                _this.pReactEventDict = {};
                return _this;
            }
            //  public setIsLis
            DomReact.prototype.vM = function () {
                return this.props.Vm;
            };
            DomReact.prototype.listenEvent = function (event, fun) {
                var _fun = this
                    .props
                    .Vm
                    .getEmit("React")
                    .addListener(event, fun);
                if (this.pReactEventDict[event]) {
                    this
                        .pReactEventDict[event]
                        .push(_fun);
                }
                else {
                    this.pReactEventDict[event] = [_fun];
                }
            };
            DomReact.prototype.removeEvent = function (event, vm) {
                if (!vm) {
                    vm = this.props.Vm;
                }
                if (event) {
                    if (this.pReactEventDict[event] && this.pReactEventDict[event].length > 0) {
                        this
                            .pReactEventDict[event]
                            .forEach(function (f) {
                            vm
                                .getEmit("React")
                                .removeListener(event, f);
                        });
                        this.pReactEventDict[event] = null;
                    }
                }
                else {
                    var _loop_1 = function (name_1) {
                        if (this_1.pReactEventDict[name_1]) {
                            _events = this_1.pReactEventDict[name_1];
                            _events.forEach(function (f) {
                                vm
                                    .getEmit("React")
                                    .removeListener(name_1, f);
                            });
                        }
                        this_1.pReactEventDict[name_1] = null;
                    };
                    var this_1 = this, _events;
                    for (var name_1 in this.pReactEventDict) {
                        _loop_1(name_1);
                    }
                    this.pReactEventDict = {};
                }
            };
            DomReact.prototype._T_ = function (a, tplName) {
                if (tplName && tplName != "") {
                    if (this.props.Vm.TplFunDic && this.props.Vm.TplFunDic[tplName]) {
                        return this.props.Vm.TplFunDic[tplName](a, this.props.Vm);
                    }
                }
                else {
                    return a;
                }
            };
            DomReact.prototype._tDom = function (dom, config) {
                if (config && config.fun) {
                    return config.fun(dom);
                }
                else {
                    if (dom) {
                        return dom.intoDom();
                    }
                    else {
                        if (config) {
                            if (config.nullNode) {
                                return config.nullNode;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                }
            };
            DomReact.prototype.setNoNeedUpdate = function (isNo) {
                this.pNoNeedUpdate = isNo;
            };
            DomReact.prototype.componentWillMount = function () {
                this.pComponentWillMount();
            };
            ;
            DomReact.prototype.componentWillUnmount = function () {
                this.pComponentWillUnmount();
            };
            ;
            DomReact.prototype.componentDidMount = function () {
                this.pComponentDidMount();
                this.IsNoFirst = true;
            };
            ;
            DomReact.prototype.pAfterForeUpdate = function (val) { };
            DomReact.prototype.pInstall = function () {
                var _this = this;
                //   if (this.props.Vm.getRegName() == "pick") debugger; 洗白
                // this.removeEvent(null, this.props.Vm);
                this
                    .props
                    .Vm
                    .getEmit("React")
                    .removeAllListeners();
                this.fEventFun = this
                    .props
                    .Vm
                    .onChangeHandle(function (val, callback) {
                    _this.pFunForceUpdate(function () {
                        _this.pAfterForeUpdate(val);
                        if (callback)
                            callback();
                    });
                    return true;
                });
                this.listenEvent("setChange", function (a) {
                    //  this.props.Vm.IsChange = a;
                    _this.fIsNoChangeSign = !a;
                });
            };
            ;
            DomReact.prototype.pUnInstall = function (vm) {
                // this.removeEvent();
                if (vm) {
                    // 这样是不行的 没准这个对象还有用呢 vm.getEmit("React").removeAllListeners(); alert("删除所有的事件");
                    this.removeEvent(null, vm);
                    // if (!vm.IsChange) {  vm.getEmit("React").removeAllListeners();
                    vm
                        .getEmit("React")
                        .removeListener(DomVm.fEVENT_CHANGE, this.fEventFun);
                    //  vm.getEmit("React").removeAllListeners(); } if (!vm.IsListItem) {
                    // vm.dispose(); }
                }
                else {
                    // this.props.Vm.getEmit("React").removeAllListeners(); this.props.Vm.dispose();
                }
            };
            ;
            DomReact.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
                this.pComponentWillUpdate(nextProps, nextState, nextContext);
            };
            DomReact.prototype.pComponentWillUpdate = function (nextProps, nextState, nextContext) { };
            DomReact.prototype.componentDidUpdate = function (prevProps, prevState, prevContext) {
                this.pComponentDidUpdate(prevProps, prevState, prevContext);
            };
            DomReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                //更新后的
                if (!(prevProps.Vm === this.props.Vm)) {
                    this.pInstall();
                    this.pDomLoad();
                    console.log(this.props.Vm.getRegName() + "重新注册");
                }
            };
            DomReact.prototype.pFunForceUpdate = function (callback) {
                console.log(this.props.Vm.getRegName() + "调用update");
                this.forceUpdate(callback);
            };
            ;
            DomReact.prototype.pBeforRender = function (nextProps, nextState, nextContext) { };
            DomReact.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
                // if (nextProps.Vm["Text"] == "郑瑜琨") debugger;
                console.log(this.props.Vm.getRegName() + "  判断是否更新" + this.props.Vm.IsChange);
                if (!(nextProps.Vm === this.props.Vm)) {
                    this.pUnInstall(this.props.Vm);
                }
                this.pBeforRender(nextProps, nextState, nextContext);
                if (!nextProps.Vm.IsMulit) {
                    if (!nextProps.Vm.NoNeedUpdate && !this.pNoNeedUpdate && nextProps.Vm.IsChange) {
                        nextProps.Vm.IsChange = false;
                        return true;
                    }
                    else
                        return false;
                }
                else {
                    return true;
                }
                // return true;
            };
            DomReact.prototype.pDomLoad = function () { };
            DomReact.prototype.pDispatcher = function (action) {
                // if (this.fDomDispatcher == null) {    this.fDomDispatcher =
                // AkDispatcher.Current(); } action.Vm = this.props.Vm;
                // this.fDomDispatcher.dispatch(action); utilFile.Core.Util.
            };
            ;
            DomReact.prototype.pComponentWillMount = function () {
                //  var __this = this;
                console.log(this.props.Vm.getRegName() + "注册");
            };
            ;
            DomReact.prototype.pComponentWillUnmount = function () {
                // this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
                this.pUnInstall();
            };
            ;
            DomReact.prototype.pComponentDidMount = function () {
                //this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
                this.pInstall();
                this.pDomLoad();
                var _msd = this.props.Vm.MetaShowData;
                // if (!_msd) _msd = {Name : this.props.Vm.getRegName()};
                if (_msd) {
                    var _dom = this.pGetDom();
                    if (_dom) {
                        var _$dom = $(_dom);
                        if (_$dom) {
                            _$dom
                                .on("mousedown", function (event) {
                                if (event["which"] == 3) {
                                    event.stopPropagation();
                                    var _$t = $(this);
                                    if (!_$t.hasClass("acs-module-warning")) {
                                        $(this).addClass("acs-module-warning");
                                        var _lis = "";
                                        if (_msd.List) {
                                            _msd
                                                .List
                                                .forEach(function (l) {
                                                _lis += ("<li>" + l + "</li>");
                                            });
                                        }
                                        var _$p = $("<div class='acs-module-warninHg-content'><h5>" + _msd.Name + "</h5><div>" + (_msd.Content
                                            ? _msd.Content
                                            : "未知组件") + "</div><ul class='list'>" + _lis + "</ul></div>");
                                        $("body").append(_$p);
                                        _$p.css({ top: event.clientY, left: event.clientX });
                                        _$t.data("div", _$p);
                                    }
                                    else {
                                        _$t.removeClass("acs-module-warning");
                                        _$t
                                            .data("div")
                                            .remove();
                                    }
                                    return false;
                                }
                            });
                        }
                    }
                }
                if (this.props.Vm.Height == 0) {
                    if (this.pIsSetScreenHeight) {
                        var _dom = ReactDOM.findDOMNode(this);
                        if (_dom) {
                            var _$dom = $(_dom);
                            if (this.ScreenDomName && this.ScreenDomName != "") {
                                var _$dom = _$dom.find(this.ScreenDomName);
                            }
                            _$dom.height($(window).height() - 60 - 30 - 30 - 47);
                        }
                    }
                    if (this.pIsSetScreenMaxHeight) {
                        var _dom = ReactDOM.findDOMNode(this);
                        if (_dom) {
                            var _$dom = $(_dom);
                            if (this.ScreenDomName && this.ScreenDomName != "") {
                                var _$dom = _$dom.find(this.ScreenDomName);
                            }
                            _$dom.css("max-height", $(window).height() - 60 - 30 - 30 - 47);
                        }
                    }
                }
                else {
                    var _dom = ReactDOM.findDOMNode(this);
                    if (_dom) {
                        var _$dom = $(_dom);
                        if (this.ScreenDomName && this.ScreenDomName != "") {
                            var _$dom = _$dom.find(this.ScreenDomName);
                        }
                        _$dom.height(this.props.Vm.Height);
                    }
                }
            };
            ;
            DomReact.prototype.pSender = function () {
                return React.createElement("span", null, this
                    .props
                    .Vm
                    .getRegName());
            };
            ;
            DomReact.prototype.pGetErrorName = function () {
                return "【dom】 【" + this
                    .props
                    .Vm
                    .getRegName() + "】 【" + this.props.Vm.Id + "】";
            };
            DomReact.prototype.componentDidCatch = function (error, errorInfo) {
                this.pComponentDidCatch(error, errorInfo);
            };
            DomReact.prototype.pComponentDidCatch = function (error, errorInfo) {
                //  alert(errorInfo);
            };
            DomReact.prototype.pGetDom = function () {
                try {
                    var _dom = ReactDOM.findDOMNode(this);
                    return _dom;
                }
                catch (exxx) {
                    return null;
                }
            };
            /**
             * react组件自带的呈现函数
             *
             * @returns {React.ReactElement < any >} react元素
             * @memberof DomReact
             */
            DomReact.prototype.render = function () {
                //$["r"]["pasend"] = this.props;   AkDispatcher.SendCount++;
                //
                console.log("【dom】：" + this.props.Vm.getRegName() + "  更新" + new Date().toLocaleTimeString());
                try {
                    if (this.renderErrorObj) {
                        var _err = this.renderErrorObj;
                        this.renderErrorObj = null;
                        throw _err;
                    }
                    if (this.props.Vm.Error != "") {
                        var _str = this.props.Vm.Error;
                        this.props.Vm.Error = "";
                        throw _str;
                    }
                    if (this.props.Vm.CustomRenderFun) {
                        return this
                            .props
                            .Vm
                            .CustomRenderFun(this.props.Vm);
                    }
                    else {
                        var res = this.pSender();
                        return res;
                    }
                }
                catch (ee) {
                    console.warn("组件异常：");
                    // console.warn(this); console.info(this);  alert();
                    var str = this.pGetErrorName() + "   " + ee.toString();
                    // console.warn(str);
                    if (ee && ee.stack) {
                        var _str_1 = ee.stack;
                        ee.StackList = _str_1.split("\n");
                    }
                    console.warn({ obj: this, Str: str, ex: ee, Stack: ee.StackList });
                    // throw "123";
                    return React.createElement("span", { className: "fa fa-exclamation-triangle Hs-red", title: str + "\n" + ee.stack });
                    // return React.DOM.span({ title: str, className: " fa fa-exclamation-triangle
                    // Hs-red " });
                }
            };
            return DomReact;
        }(React.Component));
        Core.DomReact = DomReact;
        var DomVm = /** @class */ (function () {
            function DomVm(config) {
                this.IsChange = true;
                this.fNoFirst = false;
                this.fOriValue = "";
                this.Id = "";
                this.Error = "";
                this.NoNeedUpdate = false;
                this.AppEventFunDic = {};
                this.IsDisposeAll = true;
                this.ffHasDispose = false;
                //是否是集合元素
                this.IsListItem = false;
                //hdz
                this.IsTabHide = false;
                this.Height = 0;
                // public $DomList: Array<React.Component<any, any>>; /组件只读调用
                this.pDataValue = "";
                this.getRegName = function () {
                    //$["r"]["pgetregname"] = this;
                    return this.pRegName;
                };
                if (config) {
                    this.UniId = config.UniId;
                    this.IsMulit = config.IsMulit;
                    this.Height = config.Height;
                    this.IsListItem = config.IsListItem;
                    this.fOriValue = this.pDataValue = config.DataValue;
                    this.PxWidth = config.PxWidth;
                    this.PxHeight = config.PxHeight;
                    this.initDataValue(config.DataValue);
                }
                this.fEventBus = new eventFile
                    .Core
                    .EventBus();
            }
            DomVm.prototype.getOriValue = function () { return this.fOriValue; };
            DomVm.prototype.toChange = function () {
                this.IsChange = true;
            };
            DomVm.prototype.RegistAppEvent = function (regData) {
                this.listenAppEvent(regData.Name, this.UniId, regData.Fun);
            };
            DomVm.prototype.pRegistAppEventByDom = function (regData) {
                // this.RegistAppEvent(regData);
                if (regData.DomObj.UniId == this.UniId) {
                    regData
                        .DomObj
                        .RegistAppEvent(regData);
                }
                else {
                    alert("由于组件的unid不一致 ，导致无法注册 " + regData.Name + "  事件 ");
                }
            };
            DomVm.prototype.onCustomEvent = function (fun, sender) {
                this.pRegistAppEventByDom({ DomObj: sender, Fun: fun, Name: "123" });
            };
            DomVm.prototype.listenAppEvent = function (name, uniId, fun) {
                var _fun = eventFile
                    .App
                    .GetAppEvent()
                    .addListener(name + uniId, fun);
                this.AppEventFunDic[name + uniId] = _fun;
                //eventFile.App.GetAppEvent().removeListener(name + uniId, fun);
            };
            DomVm.prototype.emitAppEvent = function (name, sign) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                (_a = eventFile
                    .App
                    .GetAppEvent()).emit.apply(_a, [name + sign].concat(args));
                var _a;
            };
            DomVm.prototype.getCache = function (key, setFun) {
                if (!this["__vmCache_" + key]) {
                    this["__vmCache_" + key] = setFun();
                }
                var _t = this["__vmCache_" + key];
                return _t;
            };
            DomVm.prototype.pGetEmit = function (name) {
                // if (this.fEmit == null) {
                if (this.fEventBus == null) {
                    this.fEventBus = new eventFile
                        .Core
                        .EventBus();
                }
                switch (name) {
                    case "Custom":
                        this.fEmit = this.fEventBus.CustomEvent;
                        break;
                    case "Hook":
                        this.fEmit = this.fEventBus.HookEvent;
                        break;
                    case "React":
                        this.fEmit = this.fEventBus.ReactEvent;
                        break;
                    case "Vm":
                    default:
                        this.fEmit = this.fEventBus.VmEvent;
                }
                //  }
                return this.fEmit;
            };
            DomVm.prototype.getEmit = function (name) {
                return this.pGetEmit(name);
            };
            DomVm.prototype.offEvent_ChangeEmit = function (fun) {
                //if (this.fEmit == null)    this.fEmit = new EventEmitter2();
                this
                    .pGetEmit("React")
                    .removeAllListeners(DomVm.fEVENT_CHANGE);
            };
            DomVm.prototype.onChangeHandle = function (fun) {
                //if (this.fEmit == null)    this.fEmit = new EventEmitter2();
                var __this = this;
                var _fun = function () {
                    fun.apply(__this, arguments);
                };
                return this
                    .pGetEmit("React")
                    .addListener(DomVm.fEVENT_CHANGE, _fun);
                //  return _fun;
            };
            DomVm.prototype.intoDom = function (key) {
                var children = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    children[_i - 1] = arguments[_i];
                }
                if (this) {
                    if (key || key === 0) {
                        this.key = key;
                        return React.createElement(this.ReactType, {
                            Vm: this,
                            key: key
                        }, children);
                    }
                    else {
                        return React.createElement(this.ReactType, {
                            Vm: this
                        }, children);
                    }
                }
                else {
                    return React.createElement("span", { className: "fa fa-exclamation-triangle" }, "\uFF08\u7A7A\u7684\u5143\u7D20\uFF09");
                }
            };
            DomVm.prototype.intoDomR = function (reactType, key, childrenNode) {
                if (key) {
                    this.key = key;
                }
                return React.createElement(reactType, {
                    Vm: this
                }, childrenNode);
            };
            DomVm.prototype.initDataValue = function (val) {
                this.fOriValue = val;
                this.TempDataValue = val;
                this.pDataValue = val;
            };
            DomVm.prototype.pDataValueSet = function (val) {
                return this.fDataValueSet(val);
            };
            DomVm.prototype.forceUpdate = function (val, callback) {
                this.IsChange = true;
                this
                    .pGetEmit("React")
                    .emit(DomVm.fEVENT_CHANGE, val, callback);
            };
            DomVm.prototype.asyncForceUpdate = function (val) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this.forceUpdate(val, resolve);
                            })];
                    });
                });
            };
            //公共接口
            DomVm.prototype.pDataValueGet = function () {
                return this.pDataValue;
            };
            DomVm.prototype.pdataValue = function (val) {
                if (val === undefined) {
                    return this.pDataValueGet();
                }
                else {
                    this.pDataValueSet(val);
                    //return val;
                }
            };
            DomVm.prototype.dataValue = function (val) {
                if (val === undefined) {
                    return this.dataValueGet();
                }
                else {
                    return this.dataValueSet(val);
                    //return val;
                }
            };
            DomVm.prototype.setOriValue = function (val) {
                this.fOriValue = val;
                this.fDataValueSet(val);
            };
            DomVm.prototype.changeNoForceUpdate = function (val) {
                if (val != this.pDataValue) {
                    var _isCheck = this.pOnchange(val);
                    if (_isCheck) {
                        //广播事件
                        this.pDataValue = val;
                        //  this.pGetEmit("React").emit(DomVm.fEVENT_CHANGE, val, callback);
                    }
                    return _isCheck;
                }
                return false;
            };
            DomVm.prototype.fDataValueSet = function (val, callback) {
                //if (!this.fNoFirst) {    this.fOriValue = val;    this.fNoFirst = true; }
                if (val != this.pDataValue) {
                    var _isCheck = this.pOnchange(val);
                    if (_isCheck) {
                        //广播事件
                        this.pDataValue = val;
                        this
                            .pGetEmit("React")
                            .emit(DomVm.fEVENT_CHANGE, val, callback);
                    }
                    return _isCheck;
                }
                return false;
            };
            DomVm.prototype.fDataValueGet = function () {
                return this.pDataValueGet();
            };
            DomVm.prototype.vmdataValue = function (val) {
                if (val === undefined) {
                    return this.vmDataValueGet();
                }
                else {
                    return this.vmDataValueSet(val);
                    //return val;
                }
            };
            DomVm.prototype.vmDataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.vmDataValueSet = function (val, callback) {
                this.fDataValueSet(val, callback);
            };
            DomVm.prototype.dataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.dataValueSet = function (val) {
                this.fDataValueSet(val);
            };
            DomVm.prototype.reactDataValueGet = function () {
                return this.fDataValueGet();
            };
            DomVm.prototype.pOnchange = function (val) {
                //$["r"]["ppros"] = this;
                this.TempDataValue = val;
                var _isCheck = true;
                if (this.ChangeEventFun != null) {
                    _isCheck = this.ChangeEventFun(val, this);
                }
                return _isCheck;
            };
            //react 组件调用接口
            DomVm.prototype.reactDataValueSet = function (val) {
                return this.fDataValueSet(val);
            };
            DomVm.prototype.pDispose = function () {
                if (!this.ffHasDispose) {
                    this.ffHasDispose = true;
                    if (this.IsDisposeAll) {
                        for (var ns in this) {
                            var _p = this[ns];
                            if (_p && _p["dispose"] && $.isFunction(_p["dispose"])) {
                                _p["dispose"]();
                            }
                            else {
                                if ($.isArray(_p)) {
                                    var _gg = _p;
                                    _gg.forEach(function (a) {
                                        if (a && a["dispose"] && $.isFunction(a["dispose"])) {
                                            a["dispose"]();
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (this.fEmit) {
                        this
                            .fEmit
                            .removeAllListeners();
                    }
                    if (this.AppEventFunDic) {
                        for (var n in this.AppEventFunDic) {
                            if (this.AppEventFunDic[n]) {
                                eventFile
                                    .App
                                    .GetAppEvent()
                                    .removeListener(n, this.AppEventFunDic[n]);
                            }
                        }
                        this.AppEventFunDic = {};
                    }
                }
            };
            DomVm.prototype.dispose = function () {
                this.pDispose();
            };
            DomVm.fEVENT_CHANGE = "event_change";
            return DomVm;
        }());
        Core.DomVm = DomVm;
        var DomProps = /** @class */ (function () {
            function DomProps() {
            }
            return DomProps;
        }());
        Core.DomProps = DomProps;
        var DomStates = /** @class */ (function () {
            function DomStates() {
            }
            return DomStates;
        }());
        Core.DomStates = DomStates;
        var DomAction = /** @class */ (function () {
            function DomAction() {
            }
            return DomAction;
        }());
        Core.DomAction = DomAction;
    })(Core = exports.Core || (exports.Core = {}));
    function _reg(name, path, src) {
        if (!src) {
            if (window["Hull_Config"] && window["Hull_Config"].IsPackage) {
                src = "";
            }
            else {
                src = "./../";
            }
        }
        iocFile
            .Core
            .Ioc
            .Current()
            .RegisterTypeSrc(name, Core.DomVm, path);
    }
    exports._reg = _reg;
});
//# sourceMappingURL=0Dom.js.map