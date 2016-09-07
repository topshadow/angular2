import {Directive,OnInit,ElementRef} from '@angular/core';

@Directive({
    selector:'[my-select]'
})
export class MySelectDirective implements OnInit{
    selecred:boolean=false;
    
    
    
    constructor(private el:ElementRef){}
    
    ngOnInit(){
        // window['$']

    }



    
}