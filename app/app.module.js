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
var app_component_1 = require('./app.component');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var app_routing_1 = require('./app.routing');
var index_1 = require('./parts/index');
var page_component_1 = require('./page.component');
var index_2 = require('./common/index');
var app_service_1 = require('./app.service');
var index_3 = require('./directive/index');
var AppModule = (function () {
    function AppModule(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routing_1.routing, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [
                app_component_1.AppComponent, index_1.SignInComponent,
                index_1.MyNavComponent, index_1.EditMyNavComponent,
                index_1.BannerComponent, index_1.EditBannerComponent,
                index_1.ShowcaseComponent, index_1.EditShowCaseComponent,
                index_1.CustomComponent, index_1.TopBar, index_1.DynamicComponent,
                page_component_1.PageComponent, index_1.SideBarComponent,
                index_3.EditorDirective, index_3.ResizableDirective, index_3.MyDragDirective,
                index_3.AccordionDirective, index_1.MyInputComponent, index_3.HoverToolbarDirective,
                ng2_dragula_1.Dragula,
                index_3.FadeInDirective,
                index_1.MyButtonComponent,
                ng2_dragula_1.Dragula, index_3.AutoStyleDirective,
                index_1.MyImageComponent, index_3.RotatableDirective,
                index_2.default, index_1.MyIconComponent, index_3.ClickToolbarDirective
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService, core_1.ViewContainerRef, core_1.TemplateRef, ng2_dragula_1.DragulaService],
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map