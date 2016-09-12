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
var MyButtonService = (function () {
    function MyButtonService(appService) {
        this.appService = appService;
    }
    MyButtonService.prototype.addInfo1Button = function (path) {
        var newButton = this.newButton;
        newButton.class = "btn btn-info";
        this.appService.addPart(path, newButton);
    };
    MyButtonService.prototype.addInfo2Button = function (path) {
        var newButton = this.newButton;
        newButton.class = "button1";
        this.appService.addPart(path, newButton);
    };
    MyButtonService.prototype.addSuccessButton = function (path) {
        var newButton = this.newButton;
        newButton.class = "btn btn-success";
        newButton.borderRadius = 15;
        this.appService.addPart(path, newButton);
    };
    MyButtonService.prototype.addPrimaryButton = function (path) {
        var newButton = this.newButton;
        newButton.class = "btn btn-primary";
        this.appService.addPart(path, newButton);
    };
    MyButtonService.prototype.addWarningButton = function (path) {
        var newButton = this.newButton;
        newButton.class = "btn btn-warning";
        this.appService.addPart(path, newButton);
    };
    MyButtonService.prototype.addDangerButton = function (path) {
        var newButton = this.newButton;
        newButton.class = "btn btn-danger";
        this.appService.addPart(path, newButton);
    };
    Object.defineProperty(MyButtonService.prototype, "newButton", {
        get: function () {
            return {
                "part": "my-button",
                "left": "50%",
                "top": "300px",
                "class": "",
                "width": "100px",
                "height": "60px",
                "style": "style1",
                "text": "按钮",
                "position": "relative",
                "color": "black",
                "backgroundColor": "white",
                "link": "",
                "useNewFrameOpen": false,
                "borderColor": "",
                "borderRadius": 0,
                "borderWidth": 0,
                "hoverBackgroundColor": "",
                "hoverColor": "",
                "hoverBorderColor": ""
            };
        },
        enumerable: true,
        configurable: true
    });
    MyButtonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], MyButtonService);
    return MyButtonService;
}());
exports.MyButtonService = MyButtonService;
//# sourceMappingURL=my-button.service.js.map