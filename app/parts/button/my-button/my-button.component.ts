import {Component,Input } from '@angular/core';
import {Router} from '@angular/router';
import {Base}  from '../../../base';

@Component({
    moduleId:module.id,
    selector:'my-button',
    templateUrl:'./my-button.component.html'
})
export class MyButtonComponent extends Base{
    @Input() myButton:MyButton ;
    
    constructor(public router:Router){
        super(router);
        this.myButton= {
            left:'300px',
            top:'300px',
            width:'300px',
            height:'60px',
            style:'style1',
            text:'按钮',
            position:'absolute',
            part:'my-button',
            color:'black',
            bgColor:'white'

        };

    }

     changePosition(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myButton);
        this.myButton.left = left;
        this.myButton.top = top;
        this.myButton.position = position;
    }


    dragStart(e) {
        console.log(e);
    }

    resizeStop(e) {
        this.myButton.width = e.target.style.width;
        this.myButton.height = e.target.style.height;
    }


}