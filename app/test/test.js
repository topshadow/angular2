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
var index_1 = require('./index');
var TestApp = (function () {
    function TestApp() {
    }
    TestApp = __decorate([
        core_1.Component({
            selector: 'test-app',
            template: "<test-drag></test-drag>\n    <drag-drop-demo></drag-drop-demo>\n    <primeng-data-table></primeng-data-table>\n    <test-order-list></test-order-list>\n    <dragula-sample></dragula-sample>\n",
            directives: [
                index_1.TestDrag, index_1.DragDropDemo,
                index_1.PrimeOrderList,
                index_1.DragulaSample
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
}());
exports.TestApp = TestApp;
//# sourceMappingURL=test.js.map