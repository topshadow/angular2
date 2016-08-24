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
var app_service_1 = require('../../../app.service');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var base_1 = require('../../../base');
function getOption() {
    return [
        {
            "part": "input",
            "title": "文本框"
        },
        {
            "part": "banner",
            "title": "横幅",
            "images": [
                {
                    "src": "http://10500322.s21i-10.faiusr.com/2/ABUIABACGAAg3sWuuwUo4620pgIwgA84vAU.jpg",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                },
                {
                    "src": "images/banner2.png",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                },
                {
                    "src": "images/CMS_06.png",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                }
            ]
        },
        {
            "part": "showcase",
            "title": "案例展示"
        },
        {
            "part": "dynamic",
            "title": "动态"
        }
    ];
}
var SideBarComponent = (function (_super) {
    __extends(SideBarComponent, _super);
    function SideBarComponent(appService, route, dragulaService) {
        _super.call(this);
        this.appService = appService;
        this.route = route;
        this.dragulaService = dragulaService;
        this.text = "文本框";
        this.optionGroups = getOption();
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dragulaService.setOptions('canDrag', {
            removeOnSpill: true
        });
        this.dragulaService.drag.subscribe(function (value) {
            console.log("drag: " + value[0]);
            _this.onDrag(value.slice(1));
        });
        this.dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            _this.onDrop(value.slice(1));
        });
        this.dragulaService.over.subscribe(function (value) {
            console.log("over: " + value[0]);
            _this.onOver(value.slice(1));
        });
        this.dragulaService.out.subscribe(function (value) {
            console.log("out: " + value[0]);
            _this.onOut(value.slice(1));
        });
        this.route.params.subscribe(function (params) {
            var path = params['path'];
            _this.page = _this.appService.getPage(path);
        });
    };
    SideBarComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        console.log('onDrag->  e:', e, 'el:', el);
        // do something
    };
    SideBarComponent.prototype.onDrop = function (args) {
        var e = args[0], el = args[1];
        console.log('onDrop->e:', e, 'el:', el);
        // do something
    };
    SideBarComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        console.log('onOver->e:', e, 'el:', el, 'container:', container);
        // do something
    };
    SideBarComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        console.log('onOut->e:', e, 'el:', el, container);
        // do something
        this.optionGroups = getOption();
    };
    SideBarComponent.prototype.dropPart = function (e) {
        e.target.style.postion = "relative";
        e.target.style.left = e.clientX;
        e.target.style.top = e.clientY;
        this.optionGroups = getOption();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SideBarComponent.prototype, "parts", void 0);
    SideBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar',
            templateUrl: "./sidebar.html",
            styleUrls: ['./sidebar.css'],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute, ng2_dragula_1.DragulaService])
    ], SideBarComponent);
    return SideBarComponent;
}(base_1.Base));
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map