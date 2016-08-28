import {Component, Input, OnInit, HostListener} from '@angular/core';
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
    constructor(private appService: AppService) {super() }

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

<<<<<<< HEAD
    dragStart(e){
    console.log(e);
    
=======
    dragStart(e) {

>>>>>>> 7bb5ef3957c84453b54036aeaaf2d5abc21f4ac5
    }

    resizeStop(e) {
        this.myInput.width = e.target.style.width;
        this.myInput.height = e.target.style.height;
    }






}
