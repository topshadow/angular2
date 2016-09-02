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
var ModalComponent = (function () {
    function ModalComponent() {
    }
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'my-modal',
            template: "\n    <!-- Modal -->\n<div #animateModal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">\u52A8\u753B</h4>\n            </div>\n            <div class=\"modal-body\">\n                <ul>\n                <li *ngFor> </li>\n                </ul>\n                <button class=\"btn btn-primary btn-xs\" (click)=\"addAnimate()\">\u6DFB\u52A0\u52A8\u753B</button>\n                <button class=\"btn btn-primary btn-xs\" (click)=\"playAnimates()\">\u64AD\u653E\u52A8\u753B</button>\n                <div class=\"modal-footer\">\n                \n                </div>\n            </div>\n        </div>\n    </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map