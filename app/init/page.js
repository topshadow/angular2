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
var part_service_1 = require('../part-service');
var Page = (function () {
    function Page(router, route, dragulaService, el, partService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dragulaService = dragulaService;
        this.el = el;
        this.partService = partService;
        dragulaService.setOptions('canDrag', {
            removeOnSpill: true
        });
        dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
    }
    Page.prototype.ngOnInit = function () {
        var currentPath = this.router.url.replace('/', '');
        this.pageParts = this.partService.getCurrentPageParts(currentPath);
        this.optionParts = this.partService.getStaticOptionParts();
    };
    Page.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        console.log('onDrag->  e:', e, 'el:', el);
        // do something
    };
    Page.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log('onDrop->e:', e, 'el:', el);
        // do something
    };
    Page.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        console.log('onOver->e:', e, 'el:', el, 'container:', container);
        // do something
    };
    Page.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        console.log('onOut->e:', e, 'el:', el, container);
        // do something
        this.optionParts = this.partService.getStaticOptionParts();
    };
    Page.prototype.viewOptionParts = function () {
        console.log(this.optionParts);
    };
    Page.prototype.viewPageParts = function () {
        console.log(this.pageParts);
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
    ], Page.prototype, "componentType", void 0);
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
            providers: [part_service_1.PartService],
            viewProviders: [ng2_dragula_1.DragulaService],
            styleUrls: ["app/init/page.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, ng2_dragula_1.DragulaService, core_1.ElementRef, part_service_1.PartService])
    ], Page);
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map