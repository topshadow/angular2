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
var app_service_1 = require('../../../../../app.service');
var base_1 = require('../../../../../base');
var ContainerPanelComponent = (function (_super) {
    __extends(ContainerPanelComponent, _super);
    function ContainerPanelComponent(router, appService, el) {
        _super.call(this, router);
        this.appService = appService;
        this.el = el;
    }
    /**
     * 编辑模式进入显示,预览模式不显示侧边栏
     */
    ContainerPanelComponent.prototype.ngOnInit = function () {
    };
    ContainerPanelComponent.prototype.show = function () {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    };
    ContainerPanelComponent.prototype.selectRectangle = function (rectangleClass) {
        this.$(this.el.nativeElement).find('#preview').attr('class', rectangleClass);
        this.selectedRectangle = rectangleClass;
    };
    ContainerPanelComponent.prototype.addRectangle = function () {
        if (!this.selectedRectangle)
            return;
        this.appService.addPart(this.path, {
            part: 'rectangle',
            backgroundColor: 'white',
            width: '200px',
            height: '40px',
            position: 'relative',
            zIndex: 3
        });
    };
    ContainerPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'container-panel',
            templateUrl: './container-panel.component.html',
            styleUrls: ['./container-panel.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService, core_1.ElementRef])
    ], ContainerPanelComponent);
    return ContainerPanelComponent;
}(base_1.Base));
exports.ContainerPanelComponent = ContainerPanelComponent;
//# sourceMappingURL=container-panel.component.js.map