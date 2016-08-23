import {Directive,OnInit} from '@angular/core';

@Directive({
    selector:'[my-select]'
})
export class MySelectDirective implements OnInit{
    selecred:boolean=false;
    
    @HostListen()
    
    constructor(){}
    
    ngOnInit(){}



    
}