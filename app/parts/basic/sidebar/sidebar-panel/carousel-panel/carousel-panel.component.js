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
var base_1 = require('../../../../../base');
var app_service_1 = require('../../../../../app.service');
var Carousel = (function () {
    function Carousel() {
    }
    return Carousel;
}());
var CarouselPanelComponent = (function (_super) {
    __extends(CarouselPanelComponent, _super);
    function CarouselPanelComponent(router, appService, el) {
        _super.call(this, router);
        this.appService = appService;
        this.el = el;
        this.carousel = { carouselImages: [] };
    }
    CarouselPanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    CarouselPanelComponent.prototype.addSrc = function (addImageInput) {
        var _this = this;
        var file = addImageInput.files[0];
        var reader = new FileReader();
        reader.onload = function (event) { _this.carousel.carouselImages.push(event.target['result']); };
        reader.readAsDataURL(file);
    };
    CarouselPanelComponent.prototype.addCarousel = function () {
        this.appService.addPart(this.path, {});
    };
    CarouselPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'carousel-panel',
            templateUrl: './carousel-panel.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService, core_1.ElementRef])
    ], CarouselPanelComponent);
    return CarouselPanelComponent;
}(base_1.Base));
exports.CarouselPanelComponent = CarouselPanelComponent;
//# sourceMappingURL=carousel-panel.component.js.map