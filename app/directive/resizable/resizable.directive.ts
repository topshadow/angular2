import {Directive, ElementRef, OnInit,Input, Output,EventEmitter} from '@angular/core';

// Tinymce directive
@Directive({
    selector: '[resizable]'
})

export class ResizableDirective implements OnInit {
    @Input() part:Part;

    @Output() onResizeStop = new EventEmitter();
    constructor(private el: ElementRef) {}

    ngOnInit() {
        if(!window['isEdit'])return false;
        window['$'](this.el.nativeElement).resizable({
            // animate:true,
            stop: (e) => {  
                this.resizeStop(e);
                // this.onResizeStop.emit(e) 可以额外发射事件
                }
        });
    }

    resizeStop(e){
        this.part.width  = e.target.style.width;
        this.part.height = e.target.style.height; 
    }

}