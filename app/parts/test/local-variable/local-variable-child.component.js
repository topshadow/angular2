"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * 这是一个计时器,父子组件通过调用本地变量来调用组件功能
 *
 */
var LocalVariableChildComponent = (function () {
    function LocalVariableChildComponent() {
        this.intervarId = 1;
        this.message = '';
        this.seconds = 11;
    }
    LocalVariableChildComponent.prototype.clearTimer = function () {
        clearInterval(this.intervarId);
    };
    LocalVariableChildComponent.prototype.ngOnInit = function () {
    };
    LocalVariableChildComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
    };
    LocalVariableChildComponent.prototype.start = function () {
        this.countDown();
    };
    LocalVariableChildComponent.prototype.stop = function () {
        this.clearTimer();
    };
    LocalVariableChildComponent.prototype.countDown = function () {
        var _this = this;
        this.intervarId = window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.message = "结束";
            }
            else {
                if (_this.seconds < 10) {
                    _this.message = "\u5F53\u524D\u65F6\u95F4\u662F" + _this.seconds + "\u79D2";
                }
                if (_this.seconds < 0) {
                    _this.message = "\u5F53\u524D\u8BA1\u65F6\u7ED3\u675F";
                    _this.seconds = 11;
                }
            }
        }, 1000);
    };
    LocalVariableChildComponent = __decorate([
        core_1.Component({
            selector: 'local-variable-child',
            template: "\n    {{message}}\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LocalVariableChildComponent);
    return LocalVariableChildComponent;
}());
exports.LocalVariableChildComponent = LocalVariableChildComponent;
//# sourceMappingURL=local-variable-child.component.js.map