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
var Base = (function () {
    function Base(router) {
        this.router = router;
        this.arrayProtoType();
    }
    Base.prototype.arrayProtoType = function () {
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
    };
    Base.prototype.showTinyMce = function () {
    };
    Object.defineProperty(Base.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "$", {
        get: function () {
            return window['$'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "path", {
        get: function () {
            return this.router.url.indexOf('?') == -1 ?
                this.router.url.slice(this.router.url.indexOf('/') + 1) :
                this.router.url.slice(this.router.url.indexOf('/') + 1, this.router.url.indexOf('?'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "activeTinymceHTMLContent", {
        get: function () {
            return window['tinymce'].activeEditor.getContent({ format: 'html' });
        },
        enumerable: true,
        configurable: true
    });
    Base = __decorate([
        core_1.Component({
            selector: "base",
            template: ''
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Base);
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map