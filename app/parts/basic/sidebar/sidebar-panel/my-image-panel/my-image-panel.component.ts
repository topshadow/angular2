import {Component,ElementRef} from '@angular/core';
import {Router} from '@angular/router';


import {Base} from '../../../../../base';


@Component({
    moduleId:module.id,
    selector:'my-image-panel',
    templateUrl:'./my-image-panel.component.html'
})
export class MyImagePanelComponent extends Base{
    constructor(public router:Router,public el:ElementRef){super(router)}

    show(){
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }
}