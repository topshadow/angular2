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
var index_1 = require('../../../directive/index');
var custom_textarea_1 = require('../../tool/custome-textarea/custom-textarea');
//菜单的数据结构
var Menu = (function () {
    function Menu() {
    }
    return Menu;
}());
var Navbar1Component = (function () {
    function Navbar1Component(el, sanitizer) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.showWysiwyg = false;
        this.singleModel = '1';
        this.checkModel = { left: false, middle: true, right: false };
        this.editState = false;
        this.radioModel = 'Middle';
    }
    Object.defineProperty(Navbar1Component.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar1Component.prototype, "showEditView", {
        get: function () {
            return this.editState;
        },
        enumerable: true,
        configurable: true
    });
    Navbar1Component.prototype.ngOnInit = function () {
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
    };
    // public checkModel:any = {left: false, middle: true, right: false};
    Navbar1Component.prototype.closeWysiwyg = function () {
        console.log('closeWysiswyg');
    };
    Navbar1Component.prototype.showChildModal = function () {
        this.childModal.show();
    };
    Navbar1Component.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    Navbar1Component.prototype.toggleEditView = function () {
        //处于预览状态下不显示
        this.editState = !this.editState;
    };
    Navbar1Component.prototype.closeEditView = function () {
        this.editState = false;
    };
    Object.defineProperty(Navbar1Component.prototype, "firstMenuList", {
        //获取菜单列表
        get: function () {
            return this.data.menuList;
        },
        enumerable: true,
        configurable: true
    });
    Navbar1Component.prototype.addFirstMenu = function (menu) {
        this.firstMenuList.push(menu);
    };
    //新增一级菜单
    Navbar1Component.prototype.addSecondaryMenu = function (oldMenu, name, component) {
        oldMenu = JSON.parse(oldMenu);
        var menu = this.firstMenuList.find(function (menu) { return menu.name == oldMenu.name; });
        var url = Math.round(Math.random() * 10000) + name;
        menu.secondaryMenu.push({ name: name, component: component, url: url });
        //添加页面的组件
        window['pages'].push({
            "path": url,
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
        this.childModal.hide();
    };
    Navbar1Component.prototype.saveServerPhone = function (serverPhone) {
        this.data.serverPhone = this.sanitizer.bypassSecurityTrustHtml(serverPhone);
        // this.data.serverPhone = serverPhone;
    };
    Navbar1Component.prototype.uploadImage = function (target) {
        var reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        var data = this.data;
    };
    Navbar1Component.prototype.changeH1Color = function () {
        window['$'](this.el.nativeElement).find('h1').css('color', 'blue');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "innerHtml", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "serverPhone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "checkModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "currentMenu", void 0);
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], Navbar1Component.prototype, "childModal", void 0);
    Navbar1Component = __decorate([
        core_1.Component({
            selector: 'navbar-1-component',
            templateUrl: 'app/pages/navbar/navbar1/navbar-1-component.html',
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
            styleUrls: ["app/pages/navbar/navbar1/navbar-1-component.css"],
            directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, common_1.CORE_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES, ng2_bootstrap_2.TAB_DIRECTIVES, custom_textarea_1.CustomTextarea, ng2_bootstrap_2.BUTTON_DIRECTIVES, forms_1.FORM_DIRECTIVES,
                ng2_bootstrap_2.ButtonRadioDirective, ng2_bootstrap_2.ButtonCheckboxDirective,
                index_1.RadioDirective
            ],
            providers: [common_1.ControlContainer]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], Navbar1Component);
    return Navbar1Component;
}());
exports.Navbar1Component = Navbar1Component;
//# sourceMappingURL=navbar-1-component.js.map