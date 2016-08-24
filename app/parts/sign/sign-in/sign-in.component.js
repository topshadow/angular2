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
const core_1 = require('@angular/core');
const app_service_1 = require('../../../app.service');
let SignInComponent = class SignInComponent {
    constructor(el, appService) {
        this.el = el;
    }
    ngOnInit() { }
    addTitle(title) {
        // this.appService
    }
    hidePanel(panel) {
        window['$'](panel).hide();
        window['$'](this.el).find('.showPanelButton').click(() => {
            window['$'](panel).show();
        });
    }
};
SignInComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sign-in',
        templateUrl: './sign-in.html',
        viewProviders: [],
        styleUrls: ['./sign-in.css']
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, app_service_1.AppService])
], SignInComponent);
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map