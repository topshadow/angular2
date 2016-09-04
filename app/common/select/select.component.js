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
/// <reference path="select.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var base_1 = require('../../base');
var SelectComponent = (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent(router) {
        _super.call(this, router);
        this.router = router;
        this.onSelected = new core_1.EventEmitter();
    }
    SelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var item = this.items.find(function (item) { return item.value == _this.selectedItemValue; });
        this.select(item);
    };
    SelectComponent.prototype.select = function (item) {
        this.selectedItemValue = item.value;
        this.selectedItemName = item.name;
        this.onSelected.emit(item.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SelectComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "selectedItemValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "onSelected", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-select',
            templateUrl: './select.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SelectComponent);
    return SelectComponent;
}(base_1.Base));
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map