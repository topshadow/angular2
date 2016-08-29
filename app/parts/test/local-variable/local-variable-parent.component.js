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
var LocalVariablePranetComponent = (function () {
    function LocalVariablePranetComponent() {
    }
    LocalVariablePranetComponent = __decorate([
        core_1.Component({
            selector: 'local-variable-parent',
            template: "\n    <local-variable-child #timercount></local-variable-child>\n    \n    <a class=\"btn btn-default\" (click)=\"timercount.start()\">\u5F00\u59CB\u8BA1\u65F6</a>\n    <a class=\"btn btn-default\" (click)=\"timercount.stop()\">\u7ED3\u675F\u8BA1\u65F6</a>\n    <h1>{{timercount.message}}</h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LocalVariablePranetComponent);
    return LocalVariablePranetComponent;
}());
exports.LocalVariablePranetComponent = LocalVariablePranetComponent;
//# sourceMappingURL=local-variable-parent.component.js.map