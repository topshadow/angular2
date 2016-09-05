/// <reference path="./my-icon.d.ts" />
import {Component,Input,OnInit,HostListener,ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';

@Component({
    moduleId:module.id,
    selector:'my-icon',
    templateUrl:'./my-icon.component.html'
})
export class MyIconComponent extends Base implements OnInit{
    @Input() myIcon:MyIcon;
    $myIconEl;
    constructor(public el:ElementRef,public router:Router){
        super(router);
    }

    @HostListener('mouseenter',['$event'])
    mouseEnterStyle(e){
        this.$myIconEl.css({
            color:this.myIcon.hoverColor
        });
    }

    @HostListener('mouseleave',['$event'])
    mouseLeaveStyle(e){
        this.$myIconEl.css({
            color:this.myIcon.color
        });
    }

    ngOnInit(){
        this.$myIconEl=this.$(this.el.nativeElement).find('.myIcon');
    }

     changePosition(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myIcon);
        this.myIcon.left = left;
        this.myIcon.top = top;
        this.myIcon.position = position;
    }


    dragStart(e) {
        console.log(e);
    }

    resizeStop(e) {
        this.myIcon.width = e.target.style.width;
        this.myIcon.height = e.target.style.height;
    }
    
     

}