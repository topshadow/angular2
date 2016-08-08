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
var Foot = (function () {
    function Foot() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Foot.prototype, "data", void 0);
    Foot = __decorate([
        core_1.Component({
            selector: 'foot',
            template: "<div class=\"footerBar\">\n          <p>\u7248\u6743\u6240\u6709 \u00A9 2011-2016 \u4E0A\u6D77\u65C5\u70E8\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8\uFF0C\u4E25\u7981\u6284\u88AD\u590D\u5236</p>\n          <p>ICP\u5907\u6848\u53F7\uFF1A\u6CAAICP\u590715011558\u53F7</p>\n     </div>",
            styles: [' .footerBar{ background:#000; color: #fff; text-align: center; padding: 30px;}']
        }), 
        __metadata('design:paramtypes', [])
    ], Foot);
    return Foot;
}());
exports.Foot = Foot;
//# sourceMappingURL=foot.js.map