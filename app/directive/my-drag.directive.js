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
var MyDragDirective = (function () {
    function MyDragDirective(el) {
        this.el = el;
        this.onMyDragStart = new core_1.EventEmitter();
        this.onMyDragHover = new core_1.EventEmitter();
        this.onMyDragStop = new core_1.EventEmitter();
    }
    MyDragDirective.prototype.ngOnInit = function () {
        var _this = this;
        window['$'](this.el.nativeElement).draggable({
            start: function (e) { _this.onMyDragStart.emit(e); },
            drag: function (e) { _this.onMyDragHover.emit(e); },
            stop: function (e) { _this.onMyDragStop.emit(e); }
        });
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
    return MyDragDirective;
}());
exports.MyDragDirective = MyDragDirective;
//# sourceMappingURL=my-drag.directive.js.map