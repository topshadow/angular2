import {Directive,Input,HostListener} from '@angular/core';

@Directive({
    selector:'[hover-toolbar]'
})
export class HoverToolbarDirective{
    @Input()
    toolbar;
    
    @HostListener('mouseenter',['$event'])
    showToolbar(e){
        window['$'](this.toolbar).show()
    }

    @HostListener('mouseleave',['$event'])
    hideToolbar(e){
        window['$'](this.toolbar).hide();
    }

}
