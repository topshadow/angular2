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
var VersionChildComponent = (function () {
    function VersionChildComponent() {
        this.changeLog = [];
    }
    VersionChildComponent.prototype.ngOnChanges = function (changes) {
        var log = [];
        for (var propName in changes) {
            var changePropes = changes[propName];
            var from = changePropes.previousValue;
            var to = changePropes.currentValue;
            log.push(propName + " version is changed from  " + from + "  to " + to + " ");
        }
        this.changeLog.push(log.join(', '));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], VersionChildComponent.prototype, "major", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], VersionChildComponent.prototype, "minor", void 0);
    VersionChildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'version-child',
            templateUrl: './version-child.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VersionChildComponent);
    return VersionChildComponent;
}());
exports.VersionChildComponent = VersionChildComponent;
//# sourceMappingURL=version-child.component.js.map