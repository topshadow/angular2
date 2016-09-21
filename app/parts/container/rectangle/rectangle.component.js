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
var base_1 = require('../../../base');
var app_service_1 = require('../../../app.service');
var Rectangle = (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var RectangleComponent = (function (_super) {
    __extends(RectangleComponent, _super);
    function RectangleComponent(router, el, appService) {
        _super.call(this, router);
        this.el = el;
        this.appService = appService;
    }
    RectangleComponent.prototype.showProperty = function (event) {
    };
    RectangleComponent.prototype.ngOnInit = function () {
        this.$('.tooltip-show').tooltip('show');
    };
    RectangleComponent.prototype.upZIndex = function () {
        this.rectangle.zIndex++;
    };
    RectangleComponent.prototype.downZIndex = function () {
        this.rectangle.zIndex--;
    };
    RectangleComponent.prototype.topZIndex = function () {
        this.rectangle.zIndex = 10;
    };
    RectangleComponent.prototype.bottomZIndex = function () {
        this.rectangle.zIndex = 0;
    };
    RectangleComponent.prototype.deleteMe = function () {
        this.appService.deletePart(this.path, this.rectangle);
    };
    RectangleComponent.prototype.changeBackgroundColor = function (backgroundColor) {
        this.rectangle.backgroundColor = backgroundColor;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Rectangle)
    ], RectangleComponent.prototype, "rectangle", void 0);
    __decorate([
        core_1.HostListener('mouseover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RectangleComponent.prototype, "showProperty", null);
    RectangleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rectangle',
            templateUrl: './rectangle.component.html',
            styleUrls: ['./rectangle.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, app_service_1.AppService])
    ], RectangleComponent);
    return RectangleComponent;
}(base_1.Base));
exports.RectangleComponent = RectangleComponent;
//# sourceMappingURL=rectangle.component.js.map