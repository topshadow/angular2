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
var base_1 = require('../../../../../base');
// import {} from ''
var ShapePanelComponent = (function (_super) {
    __extends(ShapePanelComponent, _super);
    function ShapePanelComponent(router, el) {
        _super.call(this, router);
        this.router = router;
        this.el = el;
    }
    ShapePanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    ShapePanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shape-panel',
            templateUrl: './shape-panel.component.html',
            styleUrls: ['./shape-panel.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], ShapePanelComponent);
    return ShapePanelComponent;
}(base_1.Base));
exports.ShapePanelComponent = ShapePanelComponent;
//# sourceMappingURL=shape-panel.component.js.map