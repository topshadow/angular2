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
let MyDragDirective = class MyDragDirective {
    constructor(el) {
        this.el = el;
        this.onMyDragStart = new core_1.EventEmitter();
        this.onMyDragHover = new core_1.EventEmitter();
        this.onMyDragStop = new core_1.EventEmitter();
    }
    ngOnInit() {
        window['$'](this.el.nativeElement).draggable({
            start: (e) => { this.onMyDragStart.emit(e); },
            drag: (e) => { this.onMyDragHover.emit(e); },
            stop: (e) => { this.onMyDragStop.emit(e); }
        });
    }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], MyDragDirective.prototype, "onMyDragStart", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], MyDragDirective.prototype, "onMyDragHover", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], MyDragDirective.prototype, "onMyDragStop", void 0);
MyDragDirective = __decorate([
    core_1.Directive({
        selector: '[my-drag]'
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], MyDragDirective);
exports.MyDragDirective = MyDragDirective;
//# sourceMappingURL=my-drag.directive.js.map