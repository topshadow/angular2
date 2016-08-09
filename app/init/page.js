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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数
var primeng_1 = require('primeng/primeng');
var index_2 = require('./index');
var Page = (function () {
    function Page(router, route, dragulaService, el) {
        this.router = router;
        this.route = route;
        this.dragulaService = dragulaService;
        this.el = el;
        this.availableComponentType = index_2.OPTIONCOMPONENTS;
    }
    Page.prototype.openEditComponent = function () { };
    Page.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPath = this.router.url.replace('/', '');
        console.log('current page route path:', this.currentPath);
        var currentPage = window['pages'].find(function (page) { return page.path == _this.currentPath; });
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
        this.selectedComponentType = this.pageComponents;
        this.availableComponentType = index_2.OPTIONCOMPONENTS;
    };
    Page.prototype.toggleOptionComponent = function () {
        window['$'](this.el.nativeElement).find('#optionPageComponent').toggleClass('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Page.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Page.prototype, "pageComponent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Page.prototype, "componentType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Page.prototype, "pageComponents", void 0);
    Page = __decorate([
        core_1.Component({
            templateUrl: "app/init/page.html",
            directives: [index_1.Banner1Component,
                index_1.ProductList, index_1.ServiceContent,
                index_1.ArticleShow,
                index_2.OptionComponent,
                ng2_dragula_1.Dragula,
                primeng_1.DataTable, primeng_1.Draggable, primeng_1.Droppable, primeng_1.Column,
                primeng_1.OrderList, primeng_1.PickList, index_1.HotNews
            ],
            providers: [],
            viewProviders: [ng2_dragula_1.DragulaService],
            styles: ["\n.hide{\ndisplay: none;\n}"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, ng2_dragula_1.DragulaService, core_1.ElementRef])
    ], Page);
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map