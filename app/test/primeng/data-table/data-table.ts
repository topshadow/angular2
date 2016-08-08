import {Component} from '@angular/core';

import {DataTable,Column} from 'primeng/primeng';

 interface Car {
    vin;
    year;
    brand;
    color;
}

Component({
    selector:'primeng-data-table',
    templateUrl:'app/test/primeng/data-table/data-table.html',
    directives:[DataTable, Column]
})
export class PrimeDataTable{

    cars: Car[];

    cols: any[];

    constructor() { }

    ngOnInit() {
        this.cars=[];
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
}