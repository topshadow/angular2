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
var page_component_1 = require('./page-component/page-component');
var ToolBar = (function () {
    function ToolBar() {
    }
    ToolBar.prototype.syncData = function () {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    ToolBar.prototype.editState = function () {
        window['isEdit'] = true;
    };
    ToolBar.prototype.viewState = function () {
        window['isEdit'] = false;
    };
    ToolBar.prototype.clearData = function () {
        localStorage.setItem('websiteData', '');
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ToolBar.prototype, "childModal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ToolBar.prototype, "data", void 0);
    ToolBar = __decorate([
        core_1.Component({
            selector: 'toolbar',
            templateUrl: "app/init/toolbar.html",
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
            directives: [ng2_bootstrap_1.MODAL_DIRECTIVES, page_component_1.PageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolBar);
    return ToolBar;
}());
exports.ToolBar = ToolBar;
//# sourceMappingURL=toolbar.js.map