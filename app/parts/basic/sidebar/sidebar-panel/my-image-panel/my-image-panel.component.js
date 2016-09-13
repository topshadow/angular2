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
/// <reference path="../../../../image/my-image/my-image.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_1 = require('../../../../../base');
var app_service_1 = require('../../../../../app.service');
var MyImage = (function () {
    function MyImage() {
    }
    return MyImage;
}());
var MyImagePanelComponent = (function (_super) {
    __extends(MyImagePanelComponent, _super);
    function MyImagePanelComponent(router, el, appService) {
        _super.call(this, router);
        this.router = router;
        this.el = el;
        this.appService = appService;
        this.selectImageSrc = "";
    }
    MyImagePanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    MyImagePanelComponent.prototype.selectImage = function (inputElement) {
        var _this = this;
        var file = inputElement.files[0];
        var reader = new FileReader();
        reader.onload = function (event) { _this.selectImageSrc = event.target['result']; _this.$(_this.el.nativeElement).find('.preview').attr('src', _this.selectImageSrc).show(); };
        reader.readAsDataURL(file);
    };
    MyImagePanelComponent.prototype.addMyImage = function () {
        var image = {
            "part": "my-image",
            "title": "图片",
            "width": "300px",
            "height": "60px",
            left: "200px",
            top: "50px",
            "position": "absolute",
            src: ""
        };
        image.src = this.selectImageSrc;
        this.appService.addPart(this.path, image);
    };
    MyImagePanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-image-panel',
            templateUrl: './my-image-panel.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, app_service_1.AppService])
    ], MyImagePanelComponent);
    return MyImagePanelComponent;
}(base_1.Base));
exports.MyImagePanelComponent = MyImagePanelComponent;
//# sourceMappingURL=my-image-panel.component.js.map