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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var router_1 = require('@angular/router');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var Navbar1Component = (function () {
    function Navbar1Component() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        this.editState = false;
    }
    Navbar1Component.prototype.showChildModal = function () {
        this.childModal.show();
    };
    Navbar1Component.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    Object.defineProperty(Navbar1Component.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    Navbar1Component.prototype.toggleEditView = function () {
        //处于预览状态下不显示
        this.editState = !this.editState;
    };
    Object.defineProperty(Navbar1Component.prototype, "showEditView", {
        get: function () {
            return this.editState;
        },
        enumerable: true,
        configurable: true
    });
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
    //新增一级菜单
    Navbar1Component.prototype.addtMenu = function () {
    };
    Navbar1Component.prototype.con = function (log) {
        console.log(log);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Navbar1Component.prototype, "radioModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar1Component.prototype, "checkModel", void 0);
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
            directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_2.TAB_DIRECTIVES],
            providers: [common_1.ControlContainer]
        }), 
        __metadata('design:paramtypes', [])
    ], Navbar1Component);
    return Navbar1Component;
}());
exports.Navbar1Component = Navbar1Component;
//# sourceMappingURL=navbar-1-component.js.map