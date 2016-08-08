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
var NavService = (function () {
    function NavService() {
    }
    NavService.prototype.setNav = function (nav) {
        this.nav = nav;
        console.log('nav:', this.nav);
    };
    NavService.prototype.addFirstMenu = function (menu, isCustomerMenuUrl, customerUrl) {
        if (!isCustomerMenuUrl) {
            menu.url = Math.round(Math.random() * 10000) + menu.name;
        }
        else {
            menu.url = customerUrl;
        }
        this.nav.menuList.push(menu);
        console.log(menu.url);
        window['pages'].push({
            "path": menu.url,
            "components": [
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page component1",
                    "componentType": "banner"
                },
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page comppnent2",
                    "componentType": "s"
                }
            ]
        });
    };
    NavService.prototype.addSecondaryMenu = function (firstMenu, secondaryMenu, isCustomerUrl, customerUrl) {
        var menu = this.nav.menuList.find(function (menu) { return menu.url == firstMenu.url; });
        if (isCustomerUrl) {
            secondaryMenu.url = customerUrl;
            menu.secondaryMenu.push(secondaryMenu);
            //添加页面的组件
            window['pages'].push({
                "path": secondaryMenu.url,
                "components": [
                    {
                        "component": "Banner1Component",
                        "selector": "Banner1",
                        "name": "index page component1",
                        "componentType": "banner"
                    },
                    {
                        "component": "Banner1Component",
                        "selector": "Banner1",
                        "name": "index page comppnent2",
                        "componentType": "s"
                    }
                ]
            });
        }
        else {
            secondaryMenu.url = Math.round(Math.random() * 10000) + secondaryMenu.name;
        }
    };
    NavService.prototype.getServerPhone = function () {
        return this.nav.serverPhone;
    };
    NavService.prototype.setServerPhone = function (serverPhone) {
        this.nav.serverPhone = serverPhone;
    };
    NavService.prototype.getMenuList = function () {
        return this.nav.menuList;
    };
    NavService.prototype.deleteMenu = function (menu) {
        for (var _i = 0, _a = this.nav.menuList; _i < _a.length; _i++) {
            var currentMenu = _a[_i];
            if (currentMenu == menu) {
                var elIndex = this.nav.menuList.indexOf(currentMenu);
                var after = this.nav.menuList.splice(elIndex + 1);
                this.nav.menuList = this.nav.menuList.splice(0, elIndex).concat(after);
                return true;
            }
            for (var _b = 0, _c = currentMenu.secondaryMenu; _b < _c.length; _b++) {
                var subMenu = _c[_b];
                var elIndex = currentMenu.secondaryMenu.indexOf(menu);
                var subAfter = currentMenu.secondaryMenu.splice(elIndex + 1);
                currentMenu.secondaryMenu = currentMenu.secondaryMenu.splice(0, elIndex).concat(subAfter);
                return true;
            }
        }
    };
    NavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NavService);
    return NavService;
}());
exports.NavService = NavService;
//# sourceMappingURL=nav-service.js.map