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
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require('../../../app.service');
var base_1 = require('../../../base');
var MyInputComponent = (function (_super) {
    __extends(MyInputComponent, _super);
    function MyInputComponent(appService, router, el, sceurity) {
        _super.call(this, router);
        this.appService = appService;
        this.router = router;
        this.el = el;
        this.sceurity = sceurity;
        this.optionAnimates = {
            touchEvents: [{ name: "元素出现", value: "display" },
                { name: "元素点击", value: 'click' },
                { name: "鼠标悬浮", value: 'mouse-hover' }],
            types: [{ name: "无效果", value: "none" },
                { name: "弹出", value: "popup" },
                { name: "中心放大", value: "center-big" }
            ]
        };
    }
    MyInputComponent.prototype.ngOnInit = function () {
        window['tinymce'].init({
            selector: '.tinymceMyInput',
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste imagetools"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
            content_css: [
                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                '//www.tinymce.com/css/codepen.min.css'
            ],
            a_plugin_option: true,
            a_configuration_option: 400
        });
        $(document).on('focusin', function (e) {
            if ($(e.target).closest(".mce-window").length) {
                e.stopImmediatePropagation();
            }
        });
        // console.log(this.myInput);
        this.animates = this.myInput.animates;
        console.log('my input innerHTML:', this.myInput.innerHTML);
        var el = this.$(this.el.nativeElement).find('#myInput').html(this.myInput.innerHTML);
        console.log(el);
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
    MyInputComponent.prototype.upZIndex = function () { this.myInput.zIndex++; };
    MyInputComponent.prototype.downZIndex = function () { this.myInput.zIndex--; };
    MyInputComponent.prototype.addAnimate = function () { };
    MyInputComponent.prototype.useAnimates = function () {
        for (var _i = 0, _a = this.animates; _i < _a.length; _i++) {
            var animate = _a[_i];
            this.useAnimate(animate);
        }
    };
    MyInputComponent.prototype.useAnimate = function (animate) {
        var _this = this;
        var oldEventObj = animate.eventObj;
        switch (animate.touchEvent) {
            case "click":
                this.$(this.el.nativeElement).find('.myInput').click(function () { _this.playAniamte(animate); });
                break;
            case "display":
                this.playAniamte(animate);
                break;
            case "mouse-hover":
                this.$(this.el.nativeElement).find('.myInput').hover(function () { _this.playAniamte(animate); });
                break;
        }
        return oldEventObj;
    };
    MyInputComponent.prototype.playAnimates = function () {
        for (var _i = 0, _a = this.animates; _i < _a.length; _i++) {
            var animate = _a[_i];
            this.playAniamte(animate);
        }
    };
    MyInputComponent.prototype.playAniamte = function (animate) {
        switch (animate.type) {
            case "center-big":
                //中心放大
                this.$(this.el.nativeElement).find('#myInput').animate({
                    opacity: 0.25,
                    left: "+=50",
                    height: "toggle"
                }, 5000, function () {
                    // Animation complete.
                });
                break;
            case "popup":
                //弹出
                this.$(this.el.nativeElement).find('.myInput').animate();
                break;
        }
    };
    MyInputComponent.prototype.selectAnimateTouchEvent = function (animate, event) {
        animate.touchEvent = event;
        console.log(event);
        var oldEventObj = this.useAnimate(animate);
        this.cancelEvent(oldEventObj);
    };
    MyInputComponent.prototype.cancelEvent = function (eventObj) {
        this.$(this.el.nativeElement).find('#myInput').unbind(eventObj);
    };
    MyInputComponent.prototype.saveMyInputContent = function (myInputText) {
        this.$(this.el.nativeElement).find('#myInput').html(this.activeTinymceHTMLContent);
        this.myInput.innerHTML = this.activeTinymceHTMLContent;
    };
    MyInputComponent.prototype.deleteMe = function () {
        this.appService.deletePart(this.path, this.myInput);
    };
    MyInputComponent.prototype.copy = function () {
        this.appService.addPart(this.path, this.myInput);
    };
    MyInputComponent.prototype.changeMyInputType = function (type) {
        this.myInput.type = type;
    };
    MyInputComponent.prototype.changeMyInputColor = function (color) {
        this.myInput.color = color;
    };
    MyInputComponent.prototype.changeMyInputBackgroundColor = function (backgroundColor) {
        this.myInput.backgroundColor = backgroundColor;
    };
    MyInputComponent.prototype.hasBackgroundColor = function (value) {
        value ? this.myInput.backgroundColor = "transparent" : this.myInput.backgroundColor = "white";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyInputComponent.prototype, "myInput", void 0);
    MyInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-input',
            templateUrl: "./my-input.html",
            viewProviders: [platform_browser_1.DomSanitizationService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], MyInputComponent);
    return MyInputComponent;
}(base_1.Base));
exports.MyInputComponent = MyInputComponent;
//# sourceMappingURL=my-input.component.js.map