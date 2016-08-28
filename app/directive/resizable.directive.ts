import {Directive, ElementRef, OnInit, Output,EventEmitter} from '@angular/core';
declare var tinymce: any;
// Tinymce directive
@Directive({
    selector: '[resizable]'
})

export class ResizableDirective implements OnInit {

    @Output() onResizeStop = new EventEmitter();
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        window['$'](this.el.nativeElement).resizable({
            animate:true,
            stop: (e) => { this.onResizeStop.emit(e) }
        });
    }

}