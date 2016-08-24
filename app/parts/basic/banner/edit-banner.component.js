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
var router_1 = require('@angular/router');
var app_service_1 = require('../../../app.service');
var EditBannerComponent = (function () {
    function EditBannerComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.optionBannerImage = [
            {
                src: "images/banner2.png"
            },
            {
                src: "http://10500322.s21i-10.faiusr.com/2/ABUIABACGAAg3sWuuwUo4620pgIwgA84vAU.jpg"
            },
            {
                src: "images/CMS_06.png"
            }
        ];
    }
    EditBannerComponent.prototype.addBanner = function (image) {
        this.banner.images.push(image);
    };
    EditBannerComponent.prototype.deleteImage = function (image) {
        var index = this.banner.images.indexOf(image);
        var before = this.banner.images.slice(0, index);
        var after = this.banner.images.slice(index + 1);
        this.banner.images = before.concat(after);
    };
    EditBannerComponent.prototype.deleteThisComponent = function () {
        this.banner = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditBannerComponent.prototype, "banner", void 0);
    EditBannerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-banner',
            templateUrl: './edit-banner.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], EditBannerComponent);
    return EditBannerComponent;
}());
exports.EditBannerComponent = EditBannerComponent;
//# sourceMappingURL=edit-banner.component.js.map