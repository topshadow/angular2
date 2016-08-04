import {Directive,HostListener,ElementRef,Input} from '@angular/core';

@Directive({
    selector:`[radio]`

})
export class   RadioDirective{
    constructor(private el:ElementRef){}
    selected :boolean = false;


    @Input()
    activeClass;

    @HostListener('click', ['$event'])
    confirmFirst(event) {
        window['$'](this.el.nativeElement).toggleClass(this.activeClass);
    }
}

