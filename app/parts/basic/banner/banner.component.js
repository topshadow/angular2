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
let BannerComponent = class BannerComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BannerComponent.prototype, "banner", void 0);
BannerComponent = __decorate([
    core_1.Component({
        selector: 'banner',
        templateUrl: 'app/parts/basic/banner/banner.html',
        styles: [`
    .colorBlue{
        color:blue
    }
    `],
    }), 
    __metadata('design:paramtypes', [])
], BannerComponent);
exports.BannerComponent = BannerComponent;
//# sourceMappingURL=banner.component.js.map