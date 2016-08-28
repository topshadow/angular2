import {Directive,OnInit,ElementRef} from '@angular/core';

@Directive({
    selector:' [click-alert] '
})
export class ClickAlertDirective implements OnInit{
        
    constructor(private el:ElementRef){}

    ngOnInit(){
        window['$'](this.el.nativeElement).click(()=>{alert('click this ElementRef')} );
    }

}