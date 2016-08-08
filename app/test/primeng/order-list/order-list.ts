import {Component} from '@angular/core';

import {OrderList } from 'primeng/primeng';


interface Car{
    brand:string,
    year:string;
    color:string;
}

@Component({
    selector:'test-order-list',
    templateUrl:`app/test/primeng/order-list/order-list.html`,
    directives:[OrderList],
    viewProviders:[]
})
export class  PrimeOrderList{

    cars:Car[]=[
        {brand:'b1',year:'y1',color:'c1'},
        {brand:'b2',year:'y2',color:'c2'},
        {brand:'b3',year:'y3',color:'c3'},
    ]

    consoleCars(){
            console.log(this.cars); 
    }
}