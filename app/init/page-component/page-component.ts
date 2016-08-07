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
    directives:[DataGrid,Header,Footer]
})
export class PageComponent implements  OnInit{

    cars:Car[];

    ngOnInit(){
        this.cars=[
            {vin:'vin',year:'year',brand:'brand',color:'color'},
            {vin:'vin',year:'year',brand:'brand',color:'color'},
            {vin:'vin',year:'year',brand:'brand',color:'color'}
        ];

    }

}
