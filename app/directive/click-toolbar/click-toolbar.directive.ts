import {Directive,Input,Output,ElementRef,OnInit,HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../base';


@Directive({
    selector:'[click-toolbar]'
})
export class ClickToolbarDirective extends Base implements OnInit{
    @Input()  toolbar:HTMLElement;

    @HostListener('click',['$event'])
    showToolbar(e){
        
         let {pageX,pageY} = e;
         
        this.$(this.toolbar).css({position:'relative',left:screenX,top:screenY});
        this.$(this.toolbar).toggle();
    }

    constructor(public router:Router,public el:ElementRef){
        super(router);
    }

    ngOnInit(){
        this.$('document').click(()=>this.$(this.toolbar).hide());
    }



}