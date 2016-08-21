import {Component,Input,OnInit} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'dynamic',
    templateUrl:'./dynamic.html'
})
export class DynamicComponent implements OnInit{
    @Input()
    dynamic;

    ngOnInit(){
        
    }
}