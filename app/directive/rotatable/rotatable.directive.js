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
var base_1 = require('../../base');
var RotatableDirective = (function (_super) {
    __extends(RotatableDirective, _super);
    function RotatableDirective(router, el) {
        _super.call(this, router);
        this.router = router;
        this.el = el;
    }
    RotatableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!window['isEdit'])
            return;
        if (Reflect.has(this.part, 'transform')) {
            this.$(this.el.nativeElement).css('transform', this.part.transform);
        }
        this.$(this.el.nativeElement).rotatable({
            start: function (e) { },
            rotate: function (e) { },
            stop: function (e) {
                // console.log(e);
                _this.changeRotate(e);
            }
        });
    };
    RotatableDirective.prototype.changeRotate = function (e) {
        this.part.transform = e.target.style.transform;
        this.part.transformOrigin = e.target.style.transformOrigin;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RotatableDirective.prototype, "part", void 0);
    RotatableDirective = __decorate([
        core_1.Directive({
            selector: '[rotatable]'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], RotatableDirective);
    return RotatableDirective;
}(base_1.Base));
exports.RotatableDirective = RotatableDirective;
//# sourceMappingURL=rotatable.directive.js.map