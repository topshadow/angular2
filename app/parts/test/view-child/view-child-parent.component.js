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
var view_child_child_component_1 = require('./view-child-child.component');
var ViewChildParentComponent = (function () {
    function ViewChildParentComponent() {
    }
    ViewChildParentComponent.prototype.seconds = function () {
        return 0;
    };
    ViewChildParentComponent.prototype.ngOnInit = function () {
    };
    ViewChildParentComponent.prototype.ngOnDestroy = function () {
    };
    ViewChildParentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.seconds = function () { return _this.childComponent.seconds; }; }, 0);
    };
    __decorate([
        core_1.ViewChild(view_child_child_component_1.ViewChildChildComponent), 
        __metadata('design:type', view_child_child_component_1.ViewChildChildComponent)
    ], ViewChildParentComponent.prototype, "childComponent", void 0);
    ViewChildParentComponent = __decorate([
        core_1.Component({
            selector: 'view-child-parent',
            template: "\n    <h1>\u5B50\u89C6\u56FE</h1>\n    <a class=\"btn btn-default\" (click)=\"childComponent.start()\">\u5F00\u59CB\u8BA1\u65F6</a>\n    <a class=\"btn btn-default\" (click)=\"childComponent.stop()\">\u7ED3\u675F\u8BA1\u65F6</a>\n    <view-child-child></view-child-child>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ViewChildParentComponent);
    return ViewChildParentComponent;
}());
exports.ViewChildParentComponent = ViewChildParentComponent;
//# sourceMappingURL=view-child-parent.component.js.map