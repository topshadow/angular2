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
var base_1 = require('../../../../../base');
var IconStyle = (function () {
    function IconStyle(type) {
        this.prefix = 'fa';
        this.size = 'fa-5x';
        this.rotatable = '';
        this.type = type;
    }
    IconStyle.prototype.toString = function () {
        return this.prefix + this.type + this.size + this.rotatable;
    };
    return IconStyle;
}());
var MyIconPanelComponent = (function (_super) {
    __extends(MyIconPanelComponent, _super);
    function MyIconPanelComponent(router, el) {
        _super.call(this, router);
        this.el = el;
    }
    MyIconPanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    MyIconPanelComponent.prototype.selectIcon = function (iconType) {
        this.previewIcon = new IconStyle(iconType);
    };
    MyIconPanelComponent.prototype.setPreviewIconStyle = function (style) {
        this.previewIcon[style.key] = style.value;
    };
    Object.defineProperty(MyIconPanelComponent.prototype, "selectedIconClass", {
        get: function () {
            return this.$(this.selectedIcon).attr('class'); // + this.addedStyles.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    MyIconPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-icon-panel',
            templateUrl: './my-icon-panel.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], MyIconPanelComponent);
    return MyIconPanelComponent;
}(base_1.Base));
exports.MyIconPanelComponent = MyIconPanelComponent;
//# sourceMappingURL=my-icon-panel.component.js.map