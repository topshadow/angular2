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
var HotNews = (function () {
    function HotNews() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HotNews.prototype, "data", void 0);
    HotNews = __decorate([
        core_1.Component({
            selector: 'hot-news',
            templateUrl: "app/pages/component/hot-news/hot-news.html",
            styleUrls: ["app/pages/component/hot-news/hot-news.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], HotNews);
    return HotNews;
}());
exports.HotNews = HotNews;
//# sourceMappingURL=hot-news.js.map