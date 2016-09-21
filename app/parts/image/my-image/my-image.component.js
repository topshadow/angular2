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
var MyImage = (function () {
    function MyImage() {
    }
    return MyImage;
}());
exports.MyImage = MyImage;
var MyImageComponent = (function (_super) {
    __extends(MyImageComponent, _super);
    function MyImageComponent(router, appService) {
        _super.call(this, router);
        this.router = router;
        this.appService = appService;
    }
    MyImageComponent.prototype.ngOnInit = function () {
        this.$('.tooltip-show').tooltip('show');
    };
    MyImageComponent.prototype.changePostion = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myImage);
        this.myImage.left = left;
        this.myImage.top = top;
        this.myImage.position = position;
    };
    MyImageComponent.prototype.resizeStop = function (e) {
        this.myImage.width = e.target.style.width;
        this.myImage.height = e.target.style.height;
    };
    MyImageComponent.prototype.deleteMe = function () {
        this.appService.deletePart(this.path, this.myImage);
    };
    MyImageComponent.prototype.upZIndex = function () {
        this.myImage.zIndex++;
    };
    MyImageComponent.prototype.downZIndex = function () {
        this.myImage.zIndex--;
    };
    MyImageComponent.prototype.topZIndex = function () {
        this.myImage.zIndex = 0;
    };
    MyImageComponent.prototype.bottomZIndex = function () {
        this.myImage.zIndex = 9999;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', MyImage)
    ], MyImageComponent.prototype, "myImage", void 0);
    MyImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-image',
            templateUrl: './my-image.html',
            styleUrls: ['./style1.css', './style2.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], MyImageComponent);
    return MyImageComponent;
}(base_1.Base));
exports.MyImageComponent = MyImageComponent;
//# sourceMappingURL=my-image.component.js.map