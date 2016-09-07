import {Directive, OnInit, ElementRef, Input} from '@angular/core';


@Directive({ selector: '[accordion]' })
export class AccordionDirective implements OnInit {

    constructor(private el: ElementRef) { }
    @Input() option: any;



    ngOnInit() {
        window['$'](this.el.nativeElement).accordion(this.option);
    }

}