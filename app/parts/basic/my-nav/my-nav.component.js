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
/// <reference path="./my-nav.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_1 = require('../../../base');
var MyNavComponent = (function (_super) {
    __extends(MyNavComponent, _super);
    function MyNavComponent(router) {
        _super.call(this, router);
        this.router = router;
    }
    MyNavComponent.prototype.ngOnInit = function () { };
    MyNavComponent.myNavStyles = [{
            type: 'style1',
            title: '样式1'
        }, {
            type: 'style2',
            title: '样式2'
        }];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyNavComponent.prototype, "nav", void 0);
    MyNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-nav',
            templateUrl: './my-nav.html',
            styleUrls: ['./style1.css', './style2.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MyNavComponent);
    return MyNavComponent;
}(base_1.Base));
exports.MyNavComponent = MyNavComponent;
//# sourceMappingURL=my-nav.component.js.map