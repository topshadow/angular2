import  {Component} from '@angular/core';

import {Draggable,Droppable,DataTable,Column} from 'primeng/primeng'



export interface Car {
    vin;
    year;
    brand;
    color;
}




@Component({
    selector:'drag-drop-demo',
    templateUrl:`app/test/primeng/prime-drag.html`,
    directives:[Draggable,Droppable,
        DataTable,Column
    ]
})
export class DragDropDemo {

    availableCars: Car[];

    selectedCars: Car[];

    draggedCar: Car;

    constructor() { }

    ngOnInit() {
        this.selectedCars = [];
        this.availableCars= [
            {vin:'vin',year:'year',brand:'brand',color:'color'},
            {vin:'vin2',year:'year2',brand:'brand2',color:'color2'},
            {vin:'vin3',year:'year3',brand:'brand3',color:'color3'}
        ];
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
