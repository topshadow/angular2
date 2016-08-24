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
let AppService = class AppService {
    getWebsiteData() {
        return window['websiteData'];
    }
    getNavData() {
        return window['nav'];
    }
    getPagesData() {
        return window['pages'];
    }
    getPage(path) {
        return window['pages'].find(page => page.path == path);
    }
    addPage(page) {
        window['nav'].menuList.push({
            path: page.path,
            title: page.title,
            subMenu: []
        });
        window['pages'].push(page);
    }
    deletePage(path) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var before = window['nav'].menuList.slice(0, index);
        var after = window['nav'].menuList.slice(index + 1);
        window['nav'].menuList = before.concat(after);
    }
    upPage(path) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var beforeElement = window['nav'].menuList[index - 1];
        window['nav'].menuList[index] = beforeElement;
        window['nav'].menuList[index - 1] = menu;
    }
    downPage(path) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var afterElement = window['nav'].menuList[index + 1];
        window['nav'].menuList[index] = afterElement;
        window['nav'].menuList[index + 1] = menu;
    }
    saveNavStyle(style) {
        window['nav'].selectedStyle = style;
    }
};
AppService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map