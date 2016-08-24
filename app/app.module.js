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
const core_1 = require('@angular/core');
const app_component_1 = require('./app.component');
const platform_browser_1 = require('@angular/platform-browser');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
const forms_1 = require('@angular/forms');
const ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
const app_routing_1 = require('./app.routing');
const index_1 = require('./parts/index');
const page_component_1 = require('./page.component');
const app_service_1 = require('./app.service');
const index_2 = require('./directive/index');
const my_show_1 = require('./directive/my-show');
let AppModule = class AppModule {
    constructor(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routing_1.routing, common_1.CommonModule, forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent, index_1.SignInComponent,
            index_1.MyNavComponent, index_1.EditMyNavComponent,
            index_1.BannerComponent, index_1.EditBannerComponent,
            index_1.ShowcaseComponent, index_1.EditShowCaseComponent,
            index_1.CustomComponent, index_1.TopBar, index_1.DynamicComponent,
            my_show_1.MyShowDirective, page_component_1.PageComponent, index_1.SideBarComponent,
            index_2.EditorDirective, index_2.ResizableDirective, index_2.MyDragDirective,
            index_2.AccordionDirective, index_1.MyInputComponent, index_2.HoverToolbarDirective,
            ng2_dragula_1.Dragula, index_2.ClickRefershDirective
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_service_1.AppService, core_1.ViewContainerRef, core_1.TemplateRef, ng2_dragula_1.DragulaService],
    }), 
    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map