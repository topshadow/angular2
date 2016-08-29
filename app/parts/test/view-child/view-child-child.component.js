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
var ViewChildChildComponent = (function () {
    function ViewChildChildComponent() {
        this.intervalId = 1;
        this.seconds = 11;
    }
    ViewChildChildComponent.prototype.start = function () {
        var _this = this;
        this.intervalId = window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.message = "this is seconds";
            }
            else {
                if (_this.seconds < 0) {
                    _this.message = "\u8BA1\u65F6\u7ED3\u675F";
                    _this.seconds = 10;
                }
                _this.message = _this.seconds + "\u8BA1\u6570";
            }
        }, 1000);
    };
    ViewChildChildComponent.prototype.stop = function () {
        clearInterval(this.intervalId);
    };
    ViewChildChildComponent.prototype.ngOnInit = function () {
        this.start();
    };
    ViewChildChildComponent.prototype.ngOnDestroy = function () {
        this.stop();
    };
    ViewChildChildComponent = __decorate([
        core_1.Component({
            selector: 'view-child-child',
            template: "{{message}}"
        }), 
        __metadata('design:paramtypes', [])
    ], ViewChildChildComponent);
    return ViewChildChildComponent;
}());
exports.ViewChildChildComponent = ViewChildChildComponent;
//# sourceMappingURL=view-child-child.component.js.map