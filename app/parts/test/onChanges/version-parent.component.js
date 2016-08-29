/**
 * 父子组件通过生命周期函数ogOnchanges()来互动的
 */
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
var VersionParentComponent = (function () {
    function VersionParentComponent() {
        this.major = 1;
        this.minor = 23;
    }
    VersionParentComponent.prototype.addNewMinor = function () {
        this.minor++;
    };
    VersionParentComponent.prototype.addNewMajor = function () {
        this.major++;
        this.minor = 0;
    };
    VersionParentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'version-parent',
            templateUrl: './version-parent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VersionParentComponent);
    return VersionParentComponent;
}());
exports.VersionParentComponent = VersionParentComponent;
//# sourceMappingURL=version-parent.component.js.map