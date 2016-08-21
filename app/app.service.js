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
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getWebsiteData = function () {
        return window['websiteData'];
    };
    AppService.prototype.getNavData = function () {
        return window['nav'];
    };
    AppService.prototype.getPagesData = function () {
        return window['pages'];
    };
    AppService.prototype.getPage = function (path) {
        return window['pages'].find(function (page) { return page.path == path; });
    };
    AppService.prototype.addPage = function (page) {
        window['nav'].menuList.push({
            path: page.path,
            title: page.title,
            subMenu: []
        });
        window['pages'].push(page);
    };
    AppService.prototype.deletePage = function (path) {
        var menu = window['nav'].menuList.find(function (menu) { return menu.path == path; });
        var index = window['nav'].menuList.indexOf(menu);
        var before = window['nav'].menuList.slice(0, index);
        var after = window['nav'].menuList.slice(index + 1);
        window['nav'].menuList = before.concat(after);
    };
    AppService.prototype.upPage = function (path) {
        var menu = window['nav'].menuList.find(function (menu) { return menu.path == path; });
        var index = window['nav'].menuList.indexOf(menu);
        var beforeElement = window['nav'].menuList[index - 1];
        window['nav'].menuList[index] = beforeElement;
        window['nav'].menuList[index - 1] = menu;
    };
    AppService.prototype.downPage = function (path) {
        var menu = window['nav'].menuList.find(function (menu) { return menu.path == path; });
        var index = window['nav'].menuList.indexOf(menu);
        var afterElement = window['nav'].menuList[index + 1];
        window['nav'].menuList[index] = afterElement;
        window['nav'].menuList[index + 1] = menu;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map