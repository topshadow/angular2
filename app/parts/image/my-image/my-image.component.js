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
var base_1 = require('../../../base');
var MyImageComponent = (function (_super) {
    __extends(MyImageComponent, _super);
    function MyImageComponent() {
        _super.apply(this, arguments);
    }
    MyImageComponent.prototype.ngOnInit = function () {
        console.log('my-input', this.myImage);
    };
    MyImageComponent.prototype.changePostion = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myImage);
        this.myImage.left = left;
        this.myImage.top = top;
        this.myImage.position = position;
    };
    MyImageComponent.prototype.dragStart = function (e) {
    };
    MyImageComponent.prototype.resizeStop = function (e) {
        this.myImage.width = e.target.style.width;
        this.myImage.height = e.target.style.height;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyImageComponent.prototype, "myImage", void 0);
    MyImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-image',
            templateUrl: './my-image.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyImageComponent);
    return MyImageComponent;
}(base_1.Base));
exports.MyImageComponent = MyImageComponent;
//# sourceMappingURL=my-image.component.js.map