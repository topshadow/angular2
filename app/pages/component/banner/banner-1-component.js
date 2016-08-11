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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var Image = (function () {
    function Image() {
    }
    return Image;
}());
var Banner1Component = (function () {
    function Banner1Component() {
        this.isShow = false;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [
            { "image": "http://img2.niutuku.com/desk/1208/1533/ntk-1533-42694.jpg",
                "text": "这是对第一张图片的介绍" },
            { "image": "http://img.tuku.cn/file_big/201502/6c1298bc8e044515bf48a2e277fe0ebe.jpg",
                "text": "这是图片2" },
            { "image": "http://img.tuku.cn/file_big/201502/89448ed96e524552a46abce14fab2eb8.jpg",
                "text": "这是图片3" }
        ];
    }
    Object.defineProperty(Banner1Component.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    Banner1Component.prototype.toggleIsShow = function () {
        this.isShow = !this.isShow;
    };
    // public constructor() {
    //     for (let i = 0; i < 4; i++)
    //         this.addSlide();
    //     }
    // }
    //
    //
    // public addSlide():void {
    //     let newWidth = 600 + this.slides.length + 1;
    //     this.slides.push({
    //         image: `//placekitten.com/${newWidth}`,
    //         text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
    //          ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    //     });
    // }
    Banner1Component.prototype.addOneSlide = function (image) {
        this.slides.push(image);
    };
    Banner1Component.prototype.deleteOneSlide = function (image) {
        var index = this.slides.indexOf(image);
        var after = this.slides.slice(index + 1);
        this.slides = this.slides.slice(0, index).concat(after);
    };
    Banner1Component.prototype.editSlide = function (image) {
    };
    Banner1Component.prototype.setCurrentEditMenu = function (image) {
        this.currentEditImage = image;
    };
    Banner1Component.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    Banner1Component.prototype.hideModel = function () {
        console.log('hideModel');
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], Banner1Component.prototype, "childModal", void 0);
    Banner1Component = __decorate([
        core_1.Component({
            selector: 'banner-1-component',
            directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, ng2_bootstrap_1.MODAL_DIRECTIVES, ng2_bootstrap_1.TAB_DIRECTIVES],
            templateUrl: 'app/pages/component/banner/banner-1-component.html',
            styleUrls: ['app/pages/component/banner/banner-1-component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], Banner1Component);
    return Banner1Component;
}());
exports.Banner1Component = Banner1Component;
//# sourceMappingURL=banner-1-component.js.map