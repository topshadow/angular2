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
var Page = (function () {
    function Page(router, route) {
        this.router = router;
        this.route = route;
    }
    Page.prototype.ngOnInit = function () {
        console.log(this.router.url);
        var currenPath = this.router.url.replace('/', '');
        var pageData = window['pages'].find(function (page) { return page.path == currenPath; });
        console.log(pageData);
    };
    Page = __decorate([
        core_1.Component({
            template: "\n    \u8FD9\u662F\u4E00\u4E2Aangular\u9875\u9762\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], Page);
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map