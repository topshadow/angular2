import {Component, Input, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../app.service';
import {Base} from '../../../base';

@Component({
    moduleId: module.id,
    selector: 'my-input',
    templateUrl: `./my-input.html`
})
export class MyInputComponent extends Base implements OnInit {
    selectd: boolean = false;
    editTextareaId = Math.random();

    @Input()
    public myInput;
    constructor(private appService: AppService,public router:Router) {super(router); }

    ngOnInit() {
        console.log('my-input', this.myInput);
    }
    changePostion(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myInput);
        this.myInput.left = left;
        this.myInput.top = top;
        this.myInput.position = position;
    }


    dragStart(e){
    console.log(e);

    }

    resizeStop(e) {
        this.myInput.width = e.target.style.width;
        this.myInput.height = e.target.style.height;
    }






}
