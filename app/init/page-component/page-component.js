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
var primeng_1 = require('primeng/primeng');
var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
        this.cars = [
            { vin: 'vin', year: 'year', brand: 'brand', color: 'color' },
            { vin: 'vin2', year: 'year2', brand: 'brand2', color: 'color2' },
            { vin: 'vin3', year: 'year3', brand: 'brand3', color: 'color3' }
        ];
    };
    PageComponent.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    PageComponent.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page-component',
            templateUrl: 'app/init/page-component/page-component.html',
            directives: [primeng_1.DataGrid, primeng_1.Header, primeng_1.Footer],
        }), 
        __metadata('design:paramtypes', [])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page-component.js.map