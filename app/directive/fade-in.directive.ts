import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector: '[fade-in]'
})
export class FadeInDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit() {
        
            window['$'](this.el.nativeElement).click(()=>
            window['$'](this.el.nativeElement).fadeOut()
     

        )
    }

}



