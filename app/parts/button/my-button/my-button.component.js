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
var hover_color_directive_1 = require('./hover-color-directive/hover-color.directive');
var MyButtonComponent = (function (_super) {
    __extends(MyButtonComponent, _super);
    function MyButtonComponent(el, appService, router) {
        _super.call(this, router);
        this.el = el;
        this.appService = appService;
        this.router = router;
        this.myButton = {
            left: '50%',
            top: '300px',
            width: '300px',
            height: '60px',
            style: 'style1',
            text: '按钮',
            position: 'absolute',
            part: 'my-button',
            color: 'black',
            backgroundColor: 'white',
            link: '',
            useNewFrameOpen: false,
            borderColor: '',
            borderRadius: 0,
            borderWidth: 0,
            hoverBackgroundColor: '',
            hoverColor: '',
            hoverBorderColor: '',
            zIndex: 100
        };
        this.menuList = this.appService.getMenuList();
    }
    Object.defineProperty(MyButtonComponent.prototype, "$myButtonEl", {
        get: function () {
            return this.$(this.el.nativeElement).find('.myButton');
        },
        enumerable: true,
        configurable: true
    });
    MyButtonComponent.prototype.mouseEnterColor = function (event) {
        // console.log(event);
        this.$myButtonEl.css({ color: this.myButton.hoverColor,
            "background-color": this.myButton.hoverBackgroundColor,
            "border-color": this.myButton.hoverBorderColor
        });
    };
    MyButtonComponent.prototype.mouseLeaveColor = function (event) {
        this.$myButtonEl.css({ color: this.myButton.color,
            "background-color": this.myButton.backgroundColor,
            "border-color": this.myButton.borderColor
        });
    };
    MyButtonComponent.prototype.ngOnInit = function () {
        if (this.myButton.link) {
            this.addButtonLink(this.myButton.link);
        }
    };
    MyButtonComponent.prototype.addButtonLink = function (path) {
        var _this = this;
        path = path.indexOf('/') == 0 ? path : "/" + path;
        this.$myButtonEl.click(function () {
            console.log(path);
            _this.router.navigate([path]);
        });
    };
    MyButtonComponent.prototype.changePosition = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myButton);
        this.myButton.left = left;
        this.myButton.top = top;
        this.myButton.position = position;
    };
    MyButtonComponent.prototype.dragStart = function (e) {
        console.log(e);
    };
    MyButtonComponent.prototype.resizeStop = function (e) {
        this.myButton.width = e.target.style.width;
        this.myButton.height = e.target.style.height;
    };
    MyButtonComponent.prototype.changeButtonLink = function (menu) {
        this.myButton.link = menu.path;
        this.addButtonLink(menu.path);
        this.selectedButtonLinkName = menu.title;
    };
    MyButtonComponent.prototype.useExternalLink = function (externalLink) {
        console.log(externalLink, this.myButton.useNewFrameOpen);
        if (!externalLink) {
            return;
        }
        externalLink = externalLink.indexOf("http://") == 0 ? externalLink : "http://" + externalLink;
        this.$myButtonEl.unbind('click').click(function () {
            if (externalLink) {
                window.open(externalLink);
            }
            else {
                location.href = externalLink;
            }
        });
    };
    MyButtonComponent.prototype.toggleNewFrame = function () {
        this.myButton.useNewFrameOpen = !this.myButton.useNewFrameOpen;
    };
    MyButtonComponent.prototype.upZIndex = function () {
        this.myButton.zIndex++;
    };
    MyButtonComponent.prototype.downZIndex = function () {
        this.myButton.zIndex--;
    };
    MyButtonComponent.prototype.topZIndex = function () {
        this.myButton.zIndex = 9999;
    };
    MyButtonComponent.prototype.bottomZIndex = function () {
        this.myButton.zIndex = 0;
    };
    MyButtonComponent.prototype.deleteMe = function () {
        this.appService.deletePart(this.path, this.myButton);
    };
    MyButtonComponent.prototype.copy = function () {
        this.appService.addPart(this.path, this.myButton);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyButtonComponent.prototype, "myButton", void 0);
    __decorate([
        core_1.HostListener('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MyButtonComponent.prototype, "mouseEnterColor", null);
    __decorate([
        core_1.HostListener('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MyButtonComponent.prototype, "mouseLeaveColor", null);
    MyButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-button',
            templateUrl: './my-button.component.html',
            directives: [hover_color_directive_1.HoverColorDirective]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, app_service_1.AppService, router_1.Router])
    ], MyButtonComponent);
    return MyButtonComponent;
}(base_1.Base));
exports.MyButtonComponent = MyButtonComponent;
//# sourceMappingURL=my-button.component.js.map