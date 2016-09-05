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
var base_1 = require('../../../base');
var MyButtonComponent = (function (_super) {
    __extends(MyButtonComponent, _super);
    function MyButtonComponent(router) {
        _super.call(this, router);
        this.router = router;
        this.myButton = {
            left: '300px',
            top: '300px',
            width: '300px',
            height: '60px',
            style: 'style1',
            text: '按钮',
            position: 'absolute',
            part: 'my-button',
            color: 'black',
            bgColor: 'white'
        };
    }
    MyButtonComponent.prototype.changePosition = function (e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myButton);
        this.myButton.left = left;
        this.myButton.top = top;
        this.myButton.position = position;
    };
    MyButtonComponent.prototype.dragStart = function (e) {
        console.log(e);
    };
    MyButtonComponent.prototype.resizeStop = function (e) {
        this.myButton.width = e.target.style.width;
        this.myButton.height = e.target.style.height;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyButtonComponent.prototype, "myButton", void 0);
    MyButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-button',
            templateUrl: './my-button.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MyButtonComponent);
    return MyButtonComponent;
}(base_1.Base));
exports.MyButtonComponent = MyButtonComponent;
//# sourceMappingURL=my-button.component.js.map