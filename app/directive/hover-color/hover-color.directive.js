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
var HoverColorDirective = (function (_super) {
    __extends(HoverColorDirective, _super);
    function HoverColorDirective(router, el) {
        _super.call(this, router);
        this.router = router;
        this.el = el;
    }
    HoverColorDirective.prototype.ngOnInit = function () {
        for (var property in HoverColorDirective.HoverColorProperty) {
            if (Reflect.has(this.part, property)) {
                this.cssStyleNameFix({ cssKey: property, cssValue: this.part[property] });
            }
        }
    };
    HoverColorDirective.prototype.cssStyleNameFix = function (cssKeyValuePair) {
        switch (cssKeyValuePair.cssKey) {
            case "hoverBackgroundColor":
                cssKeyValuePair.cssKey = "background-color";
                this.hoverCssStyle(cssKeyValuePair);
                break;
            case "hoverColor":
                cssKeyValuePair.cssKey = "color";
                this.cssStyleNameFix(cssKeyValuePair);
                break;
            case "hoverBorderColor":
                cssKeyValuePair.cssKey = "border-color";
                this.cssStyleNameFix(cssKeyValuePair);
                break;
            default:
                this.cssStyleNameFix(cssKeyValuePair);
                break;
        }
    };
    HoverColorDirective.prototype.hoverCssStyle = function (cssKeyValuePair) {
        var $el = this.$(this.el.nativeElement);
        $el.hover(function () { return $el.css(cssKeyValuePair.cssKey, cssKeyValuePair.cssValue); }, $el.css(cssKeyValuePair.cssKey, this.part.color));
    };
    HoverColorDirective.HoverColorProperty = ['hoverBackgroundColor', 'hoverColor', 'hoverBorderColor'];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HoverColorDirective.prototype, "part", void 0);
    HoverColorDirective = __decorate([
        core_1.Directive({
            selector: '[hover-color]'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], HoverColorDirective);
    return HoverColorDirective;
}(base_1.Base));
exports.HoverColorDirective = HoverColorDirective;
//# sourceMappingURL=hover-color.directive.js.map