import {Component,OnInit}  from '@angular/core';

import {DataGrid,Header,Footer} from 'primeng/primeng';



export interface Car {
    vin;
    year;
    brand;
    color;
}

@Component({
    selector:'page-component',
    templateUrl:'app/init/page-component/page-component.html',
    directives:[DataGrid,Header,Footer],
})
export class PageComponent implements  OnInit{


    cars:Car[];

    ngOnInit(){
        this.cars=[
            {vin:'vin',year:'year',brand:'brand',color:'color'},
            {vin:'vin2',year:'year2',brand:'brand2',color:'color2'},
            {vin:'vin3',year:'year3',brand:'brand3',color:'color3'}
        ];
    }

    selectedCar: Car;

    displayDialog: boolean;

    selectCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }

    onDialogHide() {
        this.selectedCar = null;
    }

}
