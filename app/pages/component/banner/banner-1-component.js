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
var page_component_1 = require('../../../init/page-component');
var Banner1Component = (function (_super) {
    __extends(Banner1Component, _super);
    function Banner1Component() {
        _super.apply(this, arguments);
    }
    Banner1Component.prototype.sayHello = function () {
        console.log('sayHello');
    };
    // get data(){
    //     return this.data;
    // }
    // set data(data){
    //     this.data =data;
    //     console.log(this.data);
    // }
    // constructor(){}
    Banner1Component.prototype.ngOnInit = function () {
        // console.log(this.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Banner1Component.prototype, "data", void 0);
    Banner1Component = __decorate([
        core_1.Component({
            selector: 'banner-1-component',
            templateUrl: "app/pages/component/banner/banner-1-component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Banner1Component);
    return Banner1Component;
}(page_component_1.PageComponent));
exports.Banner1Component = Banner1Component;
//# sourceMappingURL=banner-1-component.js.map