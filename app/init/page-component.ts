import {Component,Input,OnInit} from '@angular/core';


@Component({
    selector:'pagecomponent',
    template:`{{data.name}}`
    })
export class  PageComponent implements  OnInit{

        @Input()
        public data;

        constructor(){

        }
        ngOnInit(){
            console.log('pageComponent',this.data);
        }

}