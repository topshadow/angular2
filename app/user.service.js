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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserService = (function () {
    function UserService() {
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return UserService._user;
        },
        set: function (user) {
            UserService._user = user;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setWebsiteData = function (websiteData) {
        window['$'].ajax({
            method: 'POST',
            url: '/update-user',
            data: { username: this.user.username, websiteData: JSON.stringify(window['websiteData']) },
            success: function (rtn) {
                if (rtn.issuccess) {
                    window['websiteData'] = websiteData;
                    // localStorage.setItem('websiteData', websiteData);
                    alert('保存成功');
                }
                else {
                    alert(rtn.msg);
                }
            }
        });
    };
    Object.defineProperty(UserService.prototype, "websiteData", {
        get: function () {
            return UserService._user.websiteData;
        },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map