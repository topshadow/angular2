import  {Component,OnInit,Input} from '@angular/core';
import {PageComponent} from '../../../init/page-component';


@Component({
    selector:'banner-1-component',
    templateUrl:`app/pages/component/banner/banner-1-component.html`
})
export class Banner1Component extends  PageComponent implements  OnInit{

    @Input()
    public data;

    sayHello(){
        console.log('sayHello');
    }
    // get data(){
    //     return this.data;
    // }

    // set data(data){
    //     this.data =data;
    //     console.log(this.data);
    // }
    // constructor(){}

    ngOnInit(){
        // console.log(this.data);

    }

}

