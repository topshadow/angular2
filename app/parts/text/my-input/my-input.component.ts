import {Component, Input,OnInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-input',
    templateUrl: `./my-input.html`
})
export class MyInputComponent implements OnInit{
    selectd:boolean=false;

    @Input()
    public myInput;
    constructor() { }

    ngOnInit(){
        console.log('my-input',this.myInput);
    }
    changePostion(e) {
        var left = window['$'](e.target).css('left');
        var right =window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left,right,position,this.myInput);
        this.myInput.left = left;
        this.myInput.right = right;
        this.myInput.position = position;
    }

    dragStart(e){
    
    }
    
    resizeStop(e){
        this.myInput.width = e.target.style.width;
        this.myInput.height= e.target.style.height;
    }

    focus(){
        console.log('my-input focus');
    }
    blur(){
        console.log('my-input blur');
    }
}
