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
/// <reference path="./my-icon.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_1 = require('../../../base');
var app_service_1 = require('../../../app.service');
var MyIconComponent = (function (_super) {
    __extends(MyIconComponent, _super);
    function MyIconComponent(appService, el, router) {
        _super.call(this, router);
        this.appService = appService;
        this.el = el;
        this.router = router;
        this.menuList = this.appService.getMenuList();
    }
    MyIconComponent.prototype.mouseEnterStyle = function (el) {
        console.log(el);
        this.$(el).css({
            color: this.myIcon.hoverColor
        });
    };
    MyIconComponent.prototype.mouseLeaveStyle = function (el) {
        this.$(el).css({
            color: this.myIcon.color
        });
    };
    MyIconComponent.prototype.ngOnInit = function () {
    };
    MyIconComponent.prototype.changePosition = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myIcon);
        this.myIcon.left = left;
        this.myIcon.top = top;
        this.myIcon.position = position;
    };
    MyIconComponent.prototype.dragStart = function (e) {
        console.log(e);
    };
    MyIconComponent.prototype.resizeStop = function (e) {
        this.myIcon.width = e.target.style.width;
        this.myIcon.height = e.target.style.height;
    };
    MyIconComponent.prototype.changeIconLink = function (menu) {
        this.myIcon.link = menu.path;
        this.addIconLink(menu.path);
        this.selectedIconLinkName = menu.title;
        this.selectedIconLinkName = menu.title;
    };
    MyIconComponent.prototype.addIconLink = function (path) {
        var _this = this;
        path = path.indexOf('/') == 0 ? path : "/" + path;
        this.$(this.el.nativeElement).find('.myIcon').unbind('click').click(function () {
            _this.router.navigate([path]);
        });
    };
    MyIconComponent.prototype.useExternalLink = function (externalLink) {
        console.log(externalLink, this.myIcon.useNewFrameOpen);
        if (!externalLink) {
            return;
        }
        externalLink = externalLink.indexOf("http://") == 0 ? externalLink : "http://" + externalLink;
        this.$(this.el.nativeElement).find('.myIcon').unbind('click').click(function () {
            if (externalLink) {
                window.open(externalLink);
            }
            else {
                location.href = externalLink;
            }
        });
    };
    MyIconComponent.prototype.toggleNewFrame = function () {
        this.myIcon.useNewFrameOpen = !this.myIcon.useNewFrameOpen;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyIconComponent.prototype, "myIcon", void 0);
    MyIconComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-icon',
            templateUrl: './my-icon.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, core_1.ElementRef, router_1.Router])
    ], MyIconComponent);
    return MyIconComponent;
}(base_1.Base));
exports.MyIconComponent = MyIconComponent;
//# sourceMappingURL=my-icon.component.js.map