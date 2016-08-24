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
// Tinymce directive
var ResizableDirective = (function () {
    function ResizableDirective(el) {
        this.el = el;
        this.onResizeStop = new core_1.EventEmitter();
    }
    ResizableDirective.prototype.ngOnInit = function () {
        var _this = this;
        window['$'](this.el.nativeElement).resizable({
            stop: function (e) { _this.onResizeStop.emit(e); }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ResizableDirective.prototype, "onResizeStop", void 0);
    ResizableDirective = __decorate([
        core_1.Directive({
            selector: '[resizable]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ResizableDirective);
    return ResizableDirective;
}());
exports.ResizableDirective = ResizableDirective;
//# sourceMappingURL=resizable.directive.js.map