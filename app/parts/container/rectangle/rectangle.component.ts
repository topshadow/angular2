import {Component,OnInit,ElementRef,Input} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

class Rectangle{
    width:string;
    height:string;
    backgroundColor:string;
    zIndex:string;
}

@Component({
    moduleId:module.id,
    selector:'rectangle',
    templateUrl:'./rectangle.component.html'
})
export class RectangleComponent extends Base implements OnInit{
    @Input() rectangle:Rectangle;

    constructor(router:Router,public el:ElementRef){super(router)}
    ngOnInit(){}

    
    
}