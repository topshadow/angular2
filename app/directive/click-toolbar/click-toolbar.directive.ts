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
        if(!window['isEdit']) return false;
        let {pageX,pageY} = e;
        this.$(this.toolbar).css({position:'relative',left:screenX,top:screenY});
        this.$(this.toolbar).toggle();
    }

    constructor(public router:Router,public el:ElementRef){
        super(router);
    }

/**
 * 编辑模式下显示toolbar,预览模式下不显示
 */
    ngOnInit(){
        if(!window['isEdit']){
            this.$(toolbar).hide();
        }

        this.$('document').click(()=>this.$(this.toolbar).hide());
    }



}