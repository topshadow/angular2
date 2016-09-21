import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

export class MyImage {
    src: string;
    title: string;
    left: string;
    top: string;
    width: string;
    height: string;
    position: string;
    zIndex: number;
}


@Component({
    moduleId: module.id,
    selector: 'my-image',
    templateUrl: './my-image.html',
    styleUrls: ['./style1.css', './style2.css']
})
export class MyImageComponent extends Base {
    @Input() myImage: MyImage;

    constructor(public router: Router, public appService: AppService) {
        super(router);
    }
    ngOnInit() {
        this.$('.tooltip-show').tooltip('show');
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

    resizeStop(e) {
        this.myImage.width = e.target.style.width;
        this.myImage.height = e.target.style.height;
    }

    deleteMe() {
        this.appService.deletePart(this.path, this.myImage);
    }

    upZIndex() {
        this.myImage.zIndex++;
    }
    downZIndex() {
        this.myImage.zIndex--;
    }

    topZIndex() {
        this.myImage.zIndex = 0;
    }
    bottomZIndex() {
        this.myImage.zIndex = 9999;
    }

}