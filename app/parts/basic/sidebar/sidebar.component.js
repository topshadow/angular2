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
var router_2 = require('@angular/router');
var app_service_1 = require('../../../app.service');
var base_1 = require('../../../base');
var SideBarComponent = (function (_super) {
    __extends(SideBarComponent, _super);
    function SideBarComponent(appService, route, router) {
        _super.call(this, router);
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.text = "文本框";
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        console.log('onDrag->  e:', e, 'el:', el);
        // do something
    };
    SideBarComponent.prototype.dropPart = function (e) {
        e.target.style.postion = "relative";
        e.target.style.left = e.clientX;
        e.target.style.top = e.clientY;
    };
    SideBarComponent.prototype.addMyInput = function (type) {
        console.log('add myInput:', type);
        this.appService.addPart(this.path, {
            type: type,
            part: 'input', name: '文本框', innerHTML: '文本框1', height: "46px", left: "275px",
            position: "relative", title: "文本框", top: "229px", width: "375px"
        });
    };
    SideBarComponent.prototype.addMyImage = function (style) {
        this.appService.addPart(this.path, {
            part: 'my-image',
            style: style,
            title: "图片",
            src: "http://img2.imgtn.bdimg.com/it/u=395920684,863299018&fm=21&gp=0.jpg"
        });
    };
    SideBarComponent.prototype.saveWebsiteData = function () {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    SideBarComponent.prototype.clearWebsiteData = function () {
        localStorage.setItem('websiteData', '');
    };
    SideBarComponent.prototype.addMyButton = function (style) {
        this.appService.addPart(this.path, {
            style: style,
            part: 'my-button', text: '按钮', height: "46px", left: "275px",
            position: "relative", title: "按钮", top: "-229px", width: "375px"
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SideBarComponent.prototype, "parts", void 0);
    SideBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar',
            templateUrl: "./sidebar.html",
            styleUrls: ['./sidebar.css'],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_2.ActivatedRoute, router_1.Router])
    ], SideBarComponent);
    return SideBarComponent;
}(base_1.Base));
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map