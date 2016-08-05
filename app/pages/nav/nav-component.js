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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var router_1 = require('@angular/router');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var index_1 = require('../../directive/index');
var custom_textarea_1 = require('../tool/custome-textarea/custom-textarea');
var nav_service_1 = require('./nav-service');
var index_2 = require('../../pipe/index');
var NavComponent = (function () {
    function NavComponent(navService, el, sanitizer) {
        this.navService = navService;
        this.el = el;
        this.sanitizer = sanitizer;
        this.showWysiwyg = false;
        this.editState = false;
    }
    Object.defineProperty(NavComponent.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.ngOnInit = function () {
        //编辑器
        window['$'](this.el.nativeElement).find('#serverPhoneTextarea')
            .wysihtml5({
            "font-styles": true,
            "emphasis": true,
            "lists": true,
            "html": false,
            "link": true,
            //Button to insert an image. Default true,
            "color": true,
            "blockquote": true,
            "size": "24px" //default: none, other options are xs, sm, lg
        });
        this.navService.setNav(this.data);
    };
    Object.defineProperty(NavComponent.prototype, "firstMenuList", {
        //获取菜单列表
        get: function () {
            return this.data.menuList;
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.addFirstMenu = function (menu) {
        this.navService.addFirstMenu(menu);
    };
    //新增一级菜单
    NavComponent.prototype.addSecondaryMenu = function (oldMenuStr, newMenu) {
        var oldMenu = JSON.parse(oldMenuStr);
        var menu = this.firstMenuList.find(function (menu) { return menu.name == oldMenu.name; });
        newMenu.url = Math.round(Math.random() * 10000) + newMenu.name;
        menu.secondaryMenu.push(newMenu);
        //添加页面的组件
        window['pages'].push({
            "path": newMenu.url,
            "components": [
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page component1",
                    "componentType": "banner"
                },
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page comppnent2",
                    "componentType": "s"
                }
            ]
        });
    };
    NavComponent.prototype.saveServerPhone = function (serverPhone) {
        this.data.serverPhone = this.sanitizer.bypassSecurityTrustHtml(serverPhone);
        // this.data.serverPhone = serverPhone;
    };
    NavComponent.prototype.uploadImage = function (target) {
        var reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        var data = this.data;
    };
    NavComponent.prototype.changeH1Color = function () {
        window['$'](this.el.nativeElement).find('h1').css('color', 'blue');
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], NavComponent.prototype, "childModal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "innerHtml", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "serverPhone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "currentMenu", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-component',
            templateUrl: 'app/pages/nav/nav-component.html',
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
            styleUrls: ["app/pages/nav/nav-component.css"],
            directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES, ng2_bootstrap_2.TAB_DIRECTIVES, custom_textarea_1.CustomTextarea, ng2_bootstrap_2.BUTTON_DIRECTIVES, forms_1.FORM_DIRECTIVES,
                ng2_bootstrap_2.ButtonRadioDirective, ng2_bootstrap_2.ButtonCheckboxDirective,
                index_1.RadioDirective
            ],
            providers: [common_1.ControlContainer, nav_service_1.NavService],
            pipes: [index_2.Json2Object]
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService, core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav-component.js.map