import {Directive, Output, Input, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Base} from '../../base';

@Directive({
    selector: '[rotatable]'
})
export class RotatableDirective extends Base implements OnInit {
    @Input() part: Part

    constructor(public router: Router, private el: ElementRef) {
        super(router);

    }

    ngOnInit() {
            if(!window['isEdit']) return;

        if(Reflect.has(this.part,'transform')){
                this.$(this.el.nativeElement).css('transform',this.part.transform);
                
        }

        this.$(this.el.nativeElement).rotatable({
            start: (e) => { },
            rotate: (e) => { },
            stop: (e) => {
                // console.log(e);
                this.changeRotate(e)
            }
        })
    }

    changeRotate(e) {
        this.part.transform = e.target.style.transform;
        this.part.transformOrigin = e.target.style.transformOrigin;
    }

}

