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
var my_input_service_1 = require('../../../../text/my-input/my-input.service');
var MyInputPanelComponent = (function (_super) {
    __extends(MyInputPanelComponent, _super);
    function MyInputPanelComponent(router, myInputService, el) {
        _super.call(this, router);
        this.myInputService = myInputService;
        this.el = el;
    }
    MyInputPanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    MyInputPanelComponent.prototype.addH1Input = function () {
        this.myInputService.addH1Input(this.path);
    };
    MyInputPanelComponent.prototype.addH2Input = function () {
        this.myInputService.addH2Input(this.path);
    };
    MyInputPanelComponent.prototype.addH3Input = function () {
        this.myInputService.addH3Input(this.path);
    };
    MyInputPanelComponent.prototype.addH4Input = function () {
        this.myInputService.addH4Input(this.path);
    };
    MyInputPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-input-panel',
            templateUrl: './my-input-panel.html',
            providers: [my_input_service_1.MyInputService],
            styleUrls: ['./my-input-panel.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, my_input_service_1.MyInputService, core_1.ElementRef])
    ], MyInputPanelComponent);
    return MyInputPanelComponent;
}(base_1.Base));
exports.MyInputPanelComponent = MyInputPanelComponent;
//# sourceMappingURL=my-input-panel.component.js.map