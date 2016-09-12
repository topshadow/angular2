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
var my_button_service_1 = require('../../../../button/my-button/my-button.service');
var MyButtonPanelComponent = (function (_super) {
    __extends(MyButtonPanelComponent, _super);
    function MyButtonPanelComponent(router, el, buttonService) {
        _super.call(this, router);
        this.el = el;
        this.buttonService = buttonService;
    }
    ;
    MyButtonPanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    MyButtonPanelComponent.prototype.addInfo1Button = function () {
        this.buttonService.addInfo1Button(this.path);
    };
    MyButtonPanelComponent.prototype.addInfo2Button = function () {
        this.buttonService.addInfo2Button(this.path);
    };
    MyButtonPanelComponent.prototype.addSuccessButton = function () {
        this.buttonService.addSuccessButton(this.path);
    };
    MyButtonPanelComponent.prototype.addPrimaryButton = function () {
        this.buttonService.addPrimaryButton(this.path);
    };
    MyButtonPanelComponent.prototype.addWarningButton = function () {
        this.buttonService.addWarningButton(this.path);
    };
    MyButtonPanelComponent.prototype.addDangerButton = function () {
        this.buttonService.addDangerButton(this.path);
    };
    MyButtonPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-button-panel',
            providers: [my_button_service_1.MyButtonService],
            templateUrl: './my-button-panel.component.html',
            styleUrls: ['./my-button-panel.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, my_button_service_1.MyButtonService])
    ], MyButtonPanelComponent);
    return MyButtonPanelComponent;
}(base_1.Base));
exports.MyButtonPanelComponent = MyButtonPanelComponent;
//# sourceMappingURL=my-button-panel.component.js.map