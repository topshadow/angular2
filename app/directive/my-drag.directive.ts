import {Directive, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[my-drag]'
})
export class MyDragDirective implements OnInit {

    constructor(private el: ElementRef) { }

    @Output() onMyDragStart = new EventEmitter();
    @Output() onMyDragHover = new EventEmitter();
    @Output() onMyDragStop = new EventEmitter();

    ngOnInit() {
        window['$'](this.el.nativeElement).draggable({
            start: (e) => { this.onMyDragStart.emit(e) },
            drag: (e) => { this.onMyDragHover.emit(e) },
            stop: (e) => { this.onMyDragStop.emit(e) }
        });
    }

}

