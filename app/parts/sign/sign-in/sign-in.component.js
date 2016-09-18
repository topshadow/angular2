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
var router_1 = require('@angular/router');
var app_service_1 = require('../../../app.service');
var SignInComponent = (function () {
    function SignInComponent(el, appService, router) {
        this.el = el;
        this.appService = appService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.autoSignIn = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        //如果有缓存用户名,和自动登录标志,则自动登录
        this.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
        this.password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
        this.autoSignIn = localStorage.getItem('autoSignIn') == "true" ? true : false;
        if (this.autoSignIn) {
            this.signIn();
        }
    };
    SignInComponent.prototype.toggleAutoSignIn = function () {
        this.autoSignIn = !this.autoSignIn;
    };
    SignInComponent.prototype.addTitle = function (title) { };
    SignInComponent.prototype.hidePanel = function (panel) {
        $(panel).hide();
        $(this.el.nativeElement).find('.showPanelButton').click(function () {
            $(panel).show();
        });
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        window['$'].ajax({
            url: '/sign-in',
            data: {
                username: this.username,
                password: this.password
            },
            success: function (rtn) {
                if (rtn.issuccess) {
                    //将字符串转换成对象
                    localStorage.setItem('username', _this.username);
                    localStorage.setItem('password', _this.password);
                    localStorage.setItem('autoSignIn', _this.autoSignIn.toString());
                    rtn.user = JSON.parse(rtn.user);
                    _this.router.navigate(['index']);
                    _this.appService.userService.user = rtn.user;
                }
                else {
                    alert(rtn.msg);
                }
            }
        });
    };
    SignInComponent.prototype.toSignUp = function () {
        this.router.navigate(['sign-up']);
    };
    SignInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            templateUrl: './sign-in.html',
            viewProviders: [],
            styleUrls: ['./sign-in.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, app_service_1.AppService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map