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
var router_1 = require('@angular/router');
var index_1 = require('../pages/index');
var Navbar = (function () {
    function Navbar() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar.prototype, "menu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar.prototype, "menuList", void 0);
    Navbar = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n<div [ngSwitch]=\"data.component\">\n<nav-component *ngSwitchCase=\"'NavComponent'\" [data]=\"data\"> </nav-component>\n\n</div>\n",
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.js.map