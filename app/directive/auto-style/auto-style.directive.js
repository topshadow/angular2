"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require('@angular/router');
var base_1 = require('../../base');
var AutoStyleDirective = (function (_super) {
    __extends(AutoStyleDirective, _super);
    function AutoStyleDirective(router, el) {
        _super.call(this, router);
        this.router = router;
        this.el = el;
    }
    AutoStyleDirective.prototype.ngOnInit = function () {
        this.initElementStyle();
    };
    AutoStyleDirective.prototype.initElementStyle = function () {
        for (var _i = 0, _a = AutoStyleDirective.PartStyleProperty; _i < _a.length; _i++) {
            var property = _a[_i];
            if (Reflect.has(this.part, property)) {
                this.cssStyle({ cssName: property, cssValue: this.part[property] });
            }
        }
    };
    //css样式属性名修正
    AutoStyleDirective.prototype.cssNameFix = function (style) {
        switch (style.cssName) {
            case "backgroundColor":
                style.cssName = "background-color";
                this.cssStyle(style);
                break;
            case "borderColor":
                style.cssName = "border-color";
                this.cssStyle(style);
                break;
            default:
                this.cssStyle(style);
                break;
        }
    };
    AutoStyleDirective.prototype.cssStyle = function (style) {
        this.$(this.el.nativeElement).css(style.cssName, style.cssValue);
    };
    /**
     * 自动注入样式,
     * 以下是样式
     */
    AutoStyleDirective.PartStyleProperty = ["height", "width", "left", "top", "color", "backgroundColor"];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AutoStyleDirective.prototype, "part", void 0);
    AutoStyleDirective = __decorate([
        core_1.Directive({
            selector: '[auto-style]'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], AutoStyleDirective);
    return AutoStyleDirective;
}(base_1.Base));
exports.AutoStyleDirective = AutoStyleDirective;
//# sourceMappingURL=auto-style.directive.js.map