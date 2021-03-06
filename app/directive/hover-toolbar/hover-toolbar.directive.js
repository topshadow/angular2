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
var HoverToolbarDirective = (function () {
    function HoverToolbarDirective() {
    }
    HoverToolbarDirective.prototype.showToolbar = function (e) {
        window['$'](this.toolbar).show();
    };
    HoverToolbarDirective.prototype.hideToolbar = function (e) {
        window['$'](this.toolbar).hide();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HoverToolbarDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.HostListener('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HoverToolbarDirective.prototype, "showToolbar", null);
    __decorate([
        core_1.HostListener('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HoverToolbarDirective.prototype, "hideToolbar", null);
    HoverToolbarDirective = __decorate([
        core_1.Directive({
            selector: '[hover-toolbar]'
        }), 
        __metadata('design:paramtypes', [])
    ], HoverToolbarDirective);
    return HoverToolbarDirective;
}());
exports.HoverToolbarDirective = HoverToolbarDirective;
//# sourceMappingURL=hover-toolbar.directive.js.map