import {Directive, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[my-drag]'
})
export class MyDragDirective implements OnInit {
    @Input() part:Part;
    constructor(private el: ElementRef) { }

    @Output() onMyDragStart = new EventEmitter();
    @Output() onMyDragHover = new EventEmitter();
    @Output() onMyDragStop = new EventEmitter();

    ngOnInit() {
        if(!window['isEdit'])return ;
        window['$'](this.el.nativeElement).draggable({
            start: (e) => { },
            drag: (e) => {  },
            stop: (e) => { this.changePostion(e) }
        });
    }
    
    changePostion(e){
        this.part.left = e.target.style.left;
        this.part.top = e.target.style.top;
        this.part.position = e.target.style.position;
    }

}

