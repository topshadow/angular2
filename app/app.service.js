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
/// <reference path="./app.d.ts" />
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var AppService = (function () {
    function AppService() {
    }
    Object.defineProperty(AppService.prototype, "userService", {
        get: function () {
            return AppService._userService;
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.getWebsiteData = function () {
        return window['websiteData'];
    };
    /**
     * 将数据更新到windows对象上
     */
    AppService.prototype.setWebsiteData = function (websiteData) {
        window['websiteData'] = websiteData;
    };
    AppService.prototype.setNavData = function (nav) {
        window['nav'] = nav;
    };
    AppService.prototype.setPagesData = function (pagesData) {
        window['pages'] = pagesData;
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
    AppService.prototype.getMenuList = function () {
        return this.getNavData().menuList;
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
    AppService.prototype.saveNavStyle = function (style) {
        window['nav'].selectedStyle = style;
    };
    AppService.prototype.deletePart = function (path, part) {
        console.log(path);
        this.getPage(path).parts.remove(part);
    };
    AppService.prototype.addPart = function (path, part) {
        console.log(path);
        this.getPage(path).parts.push(part);
    };
    AppService.prototype.uploadImage = function (file, callback) {
        window['$'].ajax({
            method: 'POST',
            url: '/upload',
            data: {
                data: file
            },
            success: function (rtn) {
                // if(rtn.state!=1 || rtn.issuccess==false){
                // throw new Error(rtn.msg);
                // }
                callback(rtn.url);
            }
        });
        return '';
    };
    AppService._userService = new user_service_1.UserService;
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map