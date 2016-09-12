import {Component,ElementRef,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../../../base';
// import {} from ''

@Component({
    moduleId:module.id,
    selector:'shape-panel',
    templateUrl:'./shape-panel.component.html',
    styleUrls:['./shape-panel.component.css']
})
export class ShapePanelComponent extends Base{
        constructor(public router:Router,public el:ElementRef){super(router)}
        
        show(){
            this.$(this.el.nativeElement).find('.modal').modal('toggle')
        }

}