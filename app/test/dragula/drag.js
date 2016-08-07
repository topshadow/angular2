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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var TestDrag = (function () {
    function TestDrag(dragService) {
        this.dragService = dragService;
        this.items = ['a', 'b'];
        dragService.setOptions('third-bag', {
            removeOnSpill: true
        });
    }
    TestDrag = __decorate([
        core_1.Component({
            selector: 'test-drag',
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            template: "\n  <div><h1>\u5DE6\u8FB9\u7684</h1> \n  <div class=\"\" [dragula]=\"'left'\" ></div>\n  \n  </div>\n  <div><h1>\u53F3\u8FB9\u7684</h1>\n  <div  [dragula]=\"'right'\">\n   <li *ngFor=\"let item of items\" [dragula]='\"bag-one\"' [dragulaModel]='items'>\n   {{item}}\n</li>\n</div>\n  </div>\n  \n  ",
            styleUrls: ['app/test/dragula/drag.css']
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], TestDrag);
    return TestDrag;
}());
exports.TestDrag = TestDrag;
//# sourceMappingURL=drag.js.map