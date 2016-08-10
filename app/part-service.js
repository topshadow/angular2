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
var PartService = (function () {
    function PartService() {
    }
    PartService.prototype.getStaticOptionGroups = function () {
        return [{
                groupName: '基础',
                groupParts: [{
                        name: '图文展示',
                        component: 'Banner1Component'
                    },
                    {
                        "component": "ProductList",
                        "name": "产品列表"
                    },
                    {
                        "component": "ServiceContent",
                        "name": "服务内容"
                    },
                    {
                        "component": "ArticleShow",
                        "name": "文章列表"
                    },
                    {
                        "component": "HotNews",
                        "name": "热点新闻"
                    }]
            }, {
                groupName: '排版',
                groupParts: [{
                        name: '图文展示',
                        component: 'Banner1Component'
                    },
                    {
                        "component": "ProductList",
                        "name": "产品列表"
                    },
                    {
                        "component": "ServiceContent",
                        "name": "服务内容"
                    },
                    {
                        "component": "ArticleShow",
                        "name": "文章列表"
                    },
                    {
                        "component": "HotNews",
                        "name": "热点新闻"
                    }]
            },
            {
                groupName: '产品',
                groupParts: [{
                        name: '图文展示',
                        component: 'Banner1Component'
                    },
                    {
                        "component": "ProductList",
                        "name": "产品列表"
                    },
                    {
                        "component": "ServiceContent",
                        "name": "服务内容"
                    },
                    {
                        "component": "ArticleShow",
                        "name": "文章列表"
                    },
                    {
                        "component": "HotNews",
                        "name": "热点新闻"
                    }]
            },
            {
                groupName: '互动',
                groupParts: [{
                        name: '图文展示',
                        component: 'Banner1Component'
                    },
                    {
                        "component": "ProductList",
                        "name": "产品列表"
                    },
                    {
                        "component": "ServiceContent",
                        "name": "服务内容"
                    },
                    {
                        "component": "ArticleShow",
                        "name": "文章列表"
                    },
                    {
                        "component": "HotNews",
                        "name": "热点新闻"
                    }]
            },
            {
                groupName: '高级',
                groupParts: [{
                        name: '图文展示',
                        component: 'Banner1Component'
                    },
                    {
                        "component": "ProductList",
                        "name": "产品列表"
                    },
                    {
                        "component": "ServiceContent",
                        "name": "服务内容"
                    },
                    {
                        "component": "ArticleShow",
                        "name": "文章列表"
                    },
                    {
                        "component": "HotNews",
                        "name": "热点新闻"
                    }]
            },
        ];
    };
    PartService.prototype.getCurrentPageParts = function (currentPath) {
        var currentPage = window['pages'].find(function (page) { return page.path == currentPath; });
        console.log(currentPage);
        return currentPage.components;
    };
    PartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PartService);
    return PartService;
}());
exports.PartService = PartService;
//# sourceMappingURL=part-service.js.map