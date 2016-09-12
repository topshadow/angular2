import {Component,OnInit,ElementRef,Input} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../base';


@Component({
    moduleId:module.id,
    selector:'shape',
    templateUrl:'./shape.component.html'  
})
export class ShapeComponent extends Base{
    @Input() shape:Part;
    
        constructor(public router:Router,public el:ElementRef){super(router)}


}