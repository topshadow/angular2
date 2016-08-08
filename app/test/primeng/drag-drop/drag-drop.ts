import {Component} from '@angular/core';

interface Car{
    vin:string;
    year:string;
    brand:string;
    color:string;
}

const CARS=[
    {vin:'vin1',year:'year1',brand:'brand1',color:'color1'},
    {vin:'vin2',year:'year2',brand:'brand2',color:'color2'},
    {vin:'vin3',year:'year3',brand:'brand3',color:'color3'}
];

@Component({
    selector:`drag-drop-demo`,
    templateUrl:`app/test/primeng/drag-drop/drag-drop.html`
})
export class DragDropDemo {

    availableCars: Car[];

    selectedCars: Car[];

    draggedCar: Car;

    constructor() { }

    ngOnInit() {
        this.selectedCars = [];
        this.availableCars=CARS;
    }

    dragStart(event,car: Car) {
        this.draggedCar = car;
    }

    drop(event) {
        if(this.draggedCar) {
            this.selectedCars.push(this.draggedCar);
            this.availableCars.splice(this.findIndex(this.draggedCar), 1);
            this.draggedCar = null;
        }
    }

    dragEnd(event) {
        this.draggedCar = null;
    }

    findIndex(car: Car) {
        let index = -1;
        for(let i = 0; i < this.availableCars.length; i++) {
            if(car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }

}