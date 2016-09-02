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
/// <reference path="./my-input.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require('../../../app.service');
var base_1 = require('../../../base');
var MyInputComponent = (function (_super) {
    __extends(MyInputComponent, _super);
    function MyInputComponent(appService, router) {
        _super.call(this, router);
        this.appService = appService;
        this.router = router;
    }
    MyInputComponent.prototype.ngOnInit = function () {
        console.log('my-input', this.myInput);
    };
    MyInputComponent.prototype.changePostion = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myInput);
        this.myInput.left = left;
        this.myInput.top = top;
        this.myInput.position = position;
    };
    MyInputComponent.prototype.dragStart = function (e) {
        console.log(e);
    };
    MyInputComponent.prototype.resizeStop = function (e) {
        this.myInput.width = e.target.style.width;
        this.myInput.height = e.target.style.height;
    };
    MyInputComponent.prototype.upZIndex = function () {
        this.myInput.zIndex++;
    };
    MyInputComponent.prototype.downZIndex = function () {
        this.myInput.zIndex--;
    };
    MyInputComponent.prototype.TopZIndex = function () {
        this.myInput.zIndex = 9999;
    };
    MyInputComponent.prototype.bottomZIndex = function () {
        this.myInput.zIndex = 0;
    };
    MyInputComponent.prototype.deleteMe = function () {
        this.appService.deletePart(this.path, this.myInput);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyInputComponent.prototype, "myInput", void 0);
    MyInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-input',
            templateUrl: "./my-input.html"
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], MyInputComponent);
    return MyInputComponent;
}(base_1.Base));
exports.MyInputComponent = MyInputComponent;
//# sourceMappingURL=my-input.component.js.map