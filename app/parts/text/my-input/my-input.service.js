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
var app_service_1 = require('../../../app.service');
var MyInputService = (function () {
    function MyInputService(appService) {
        this.appService = appService;
    }
    MyInputService.prototype.addH1Input = function (path) {
        var newInput = this.newInput;
        newInput.type = "h1";
        this.appService.addPart(path, newInput);
    };
    MyInputService.prototype.addH2Input = function (path) {
        var newInput = this.newInput;
        newInput.type = "h2";
        this.appService.addPart(path, newInput);
    };
    MyInputService.prototype.addH3Input = function (path) {
        var newInput = this.newInput;
        newInput.type = "h3";
        this.appService.addPart(path, newInput);
    };
    MyInputService.prototype.addH4Input = function (path) {
        var newInput = this.newInput;
        newInput.type = "h4";
        this.appService.addPart(path, newInput);
    };
    Object.defineProperty(MyInputService.prototype, "newInput", {
        get: function () {
            return {
                "part": "input",
                "title": "文本框",
                "type": "h1",
                "innerHTML": "text",
                "color": "black",
                "backgroundColor": "white",
                "animates": [],
                "left": "50%",
                "top": "200px",
                "position": "absolute",
                "width": "300px",
                "height": "60px"
            };
        },
        enumerable: true,
        configurable: true
    });
    MyInputService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], MyInputService);
    return MyInputService;
}());
exports.MyInputService = MyInputService;
//# sourceMappingURL=my-input.service.js.map