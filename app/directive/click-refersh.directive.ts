import {Directive, Input, HostListener} from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[click-refersh]'
})
export class ClickRefershDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { 
          this.viewContainer.createEmbeddedView(this.templateRef);
          window['viewContainer']=this.viewContainer;
          window['templateRef']=this.templateRef;
    }

    @HostListener('click', [])
    refersh() {
        console.log(this.templateRef,this.viewContainer);
        
         this.viewContainer.clear();
         this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
