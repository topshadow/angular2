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
const core_2 = require('@angular/core');
let ClickRefershDirective = class ClickRefershDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.viewContainer.createEmbeddedView(this.templateRef);
        window['viewContainer'] = this.viewContainer;
        window['templateRef'] = this.templateRef;
    }
    refersh() {
        console.log(this.templateRef, this.viewContainer);
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
};
__decorate([
    core_1.HostListener('click', []), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], ClickRefershDirective.prototype, "refersh", null);
ClickRefershDirective = __decorate([
    core_1.Directive({
        selector: '[click-refersh]'
    }), 
    __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
], ClickRefershDirective);
exports.ClickRefershDirective = ClickRefershDirective;
//# sourceMappingURL=click-refersh.directive.js.map