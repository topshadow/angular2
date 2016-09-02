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
var router_1 = require('@angular/router');
var app_service_1 = require('../../../app.service');
var base_1 = require('../../../base');
var TopBar = (function (_super) {
    __extends(TopBar, _super);
    function TopBar(router, appService, route) {
        var _this = this;
        _super.call(this, router);
        this.router = router;
        this.appService = appService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            var path = params['path'];
            _this.page = appService.getPage(path);
            _this.nav = appService.getNavData();
        });
    }
    TopBar.prototype.deletePart = function (part) {
        var index = this.page.parts.indexOf(part);
        var after = this.page.parts.slice(index + 1);
        var before = this.page.parts.slice(0, index);
        this.page.parts = before.concat(after);
    };
    TopBar.prototype.upPart = function (part) {
        var index = this.page.parts.indexOf(part);
        if (index !== 0) {
            var preElement = this.page.parts[index - 1];
            this.page.parts[index] = preElement;
            this.page.parts[index - 1] = part;
        }
    };
    TopBar.prototype.downPart = function (part) {
        var index = this.page.parts.indexOf(part);
        if (index !== this.page.parts.length - 1) {
            var afterElement = this.page.parts[index + 1];
            this.page.parts[index] = afterElement;
            this.page.parts[index + 1] = part;
        }
    };
    TopBar.prototype.saveWebsiteData = function () {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    };
    TopBar.prototype.clearWebsiteData = function () {
        localStorage.setItem('websiteData', '');
    };
    TopBar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'topbar',
            templateUrl: './topbar.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService, router_1.ActivatedRoute])
    ], TopBar);
    return TopBar;
}(base_1.Base));
exports.TopBar = TopBar;
//# sourceMappingURL=topbar.component.js.map