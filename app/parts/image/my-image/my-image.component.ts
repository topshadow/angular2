import {Component,Input} from '@angular/core';
import {Base} from '../../../base';

@Component({
    moduleId: module.id,
    selector: 'my-image',
    templateUrl: './my-image.html'
})
export class MyImageComponent extends Base {
    @Input()
    myImage;
    ngOnInit() {
        console.log('my-input', this.myImage);
    }
    changePostion(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myImage);
        this.myImage.left = left;
        this.myImage.top = top;
        this.myImage.position = position;
    }

    dragStart(e) {

    }

    resizeStop(e) {
        this.myImage.width = e.target.style.width;
        this.myImage.height = e.target.style.height;
    }
}