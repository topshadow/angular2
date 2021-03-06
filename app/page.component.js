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
var app_service_1 = require('./app.service');
var PageComponent = (function () {
    function PageComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.appService.userService.user;
        // console.log(user);
        this.appService.setWebsiteData(user.websiteData);
        this.appService.setNavData(user.websiteData['nav']);
        this.appService.setPagesData(user.websiteData['pages']);
        this.path = this.router.url.replace('/', '');
        this.route.params.subscribe(function (params) {
            _this.path = params['path']; // (+) converts string 'id' to a number
            _this.page = _this.appService.getPagesData().find(function (page) { return page.path == _this.path; });
            _this.nav = _this.appService.getNavData();
            console.log(params);
        });
        this.route.params.subscribe(function (params) {
            console.log('compare :', params);
            window['isEdit'] = params['isEdit'] == 'true' ? true : false;
        });
    };
    PageComponent.prototype.ngOnDestroy = function () {
        console.log('page component is destory');
    };
    PageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page',
            templateUrl: './page.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map