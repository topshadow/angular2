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
const router_1 = require('@angular/router');
const app_service_1 = require('../../../app.service');
const base_1 = require('../../../base');
let TopBar = class TopBar extends base_1.Base {
    constructor(viewContainerRef, appService, route) {
        super();
        this.appService = appService;
        this.route = route;
        this.route.params.subscribe(params => {
            let path = params['path'];
            this.page = appService.getPage(path);
            this.nav = appService.getNavData();
        });
    }
    deletePart(part) {
        var index = this.page.parts.indexOf(part);
        var after = this.page.parts.slice(index + 1);
        var before = this.page.parts.slice(0, index);
        this.page.parts = before.concat(after);
    }
    upPart(part) {
        var index = this.page.parts.indexOf(part);
        if (index !== 0) {
            var preElement = this.page.parts[index - 1];
            this.page.parts[index] = preElement;
            this.page.parts[index - 1] = part;
        }
    }
    downPart(part) {
        var index = this.page.parts.indexOf(part);
        if (index !== this.page.parts.length - 1) {
            var afterElement = this.page.parts[index + 1];
            this.page.parts[index] = afterElement;
            this.page.parts[index + 1] = part;
        }
    }
    saveWebsiteData() {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    }
    clearWebsiteData() {
        localStorage.setItem('websiteData', '');
    }
};
TopBar = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'topbar',
        templateUrl: './topbar.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [core_1.ViewContainerRef, app_service_1.AppService, router_1.ActivatedRoute])
], TopBar);
exports.TopBar = TopBar;
//# sourceMappingURL=topbar.component.js.map