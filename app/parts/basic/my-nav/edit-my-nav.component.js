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
var app_service_1 = require('../../../app.service');
var EditMyNavComponent = (function () {
    function EditMyNavComponent(appService, el) {
        this.appService = appService;
        this.el = el;
        this.styles = ['style1', 'style2'];
        this.selectedStyle = 'style1';
    }
    EditMyNavComponent.prototype.selectStyle = function (style) {
        this.selectedStyle = style;
        //保存样式
        this.appService.saveNavStyle(style);
    };
    EditMyNavComponent.prototype.addPage = function (page) {
        this.appService.addPage(page);
    };
    EditMyNavComponent.prototype.deletePage = function (menu) {
        this.appService.deletePage(menu.path);
    };
    EditMyNavComponent.prototype.upPage = function (menu) {
        this.appService.upPage(menu.path);
    };
    EditMyNavComponent.prototype.downPage = function (menu) {
        this.appService.downPage(menu.path);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditMyNavComponent.prototype, "nav", void 0);
    EditMyNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-my-nav',
            templateUrl: './edit-my-nav.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, core_1.ElementRef])
    ], EditMyNavComponent);
    return EditMyNavComponent;
}());
exports.EditMyNavComponent = EditMyNavComponent;
//# sourceMappingURL=edit-my-nav.component.js.map