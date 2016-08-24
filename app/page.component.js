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
const router_1 = require('@angular/router');
const app_service_1 = require('./app.service');
let PageComponent = class PageComponent {
    constructor(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    ngOnInit() {
        this.path = this.router.url.replace('/', '');
        this.route.params.subscribe(params => {
            this.path = params['path']; // (+) converts string 'id' to a number
            this.page = this.appService.getPagesData().find(page => page.path == this.path);
            this.nav = this.appService.getNavData();
            console.log(params);
        });
        this.route.queryParams.subscribe(params => {
            window['isEdit'] = params['isEdit'] || params['isEdit'] == 'true' ? true : false;
        });
    }
    ngOnDestroy() {
        console.log('page component is destory');
    }
};
PageComponent = __decorate([
    core_1.Component({
        selector: 'page',
        template: `    
      <topbar ></topbar>
        <my-nav [nav]="nav" ></my-nav>
         <sidebar [parts]="page.parts"></sidebar>
    <ul  [dragula]='"dragpart"' [dragulaModel]="page.parts">
    <li *ngFor="let part of page.parts"  >
        <div [ngSwitch]="part.part"> 
        <my-input *ngSwitchCase="'input'" [myInput]="part"></my-input>
            <banner *ngSwitchCase="'banner'"  [banner]="part" ></banner>
            <showcase *ngSwitchCase=" 'showcase' " [showcase]="part"></showcase>
            <dynamic *ngSwitchCase="'dynamic'" [dynamic]="part"></dynamic>
        </div>

    </li>
  </ul>
    `
    }), 
    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
], PageComponent);
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map