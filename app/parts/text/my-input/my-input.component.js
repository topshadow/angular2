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
var MyInputComponent = (function () {
    function MyInputComponent() {
        this.selectd = false;
    }
    MyInputComponent.prototype.ngOnInit = function () {
        console.log('my-input', this.myInput);
    };
    MyInputComponent.prototype.changePostion = function (e) {
        var left = window['$'](e.target).css('left');
        var right = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, right, position, this.myInput);
        this.myInput.left = left;
        this.myInput.right = right;
        this.myInput.position = position;
    };
    MyInputComponent.prototype.dragStart = function (e) {
    };
    MyInputComponent.prototype.resizeStop = function (e) {
        this.myInput.width = e.target.style.width;
        this.myInput.height = e.target.style.height;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyInputComponent.prototype, "myInput", void 0);
    MyInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-input',
            templateUrl: "./my-input.html"
        }), 
        __metadata('design:paramtypes', [])
    ], MyInputComponent);
    return MyInputComponent;
}());
exports.MyInputComponent = MyInputComponent;
//# sourceMappingURL=my-input.component.js.map