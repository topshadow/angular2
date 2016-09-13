/// <reference path="../../../../image/my-image/my-image.d.ts" />
import {Component, ElementRef} from '@angular/core';
import {Router} from '@angular/router';


import {Base} from '../../../../../base';
import {AppService} from '../../../../../app.service';

class MyImage {
    part: string;
    src: string;
    title: string;
    left: string;
    top: string;
    width: string;
    height: string;
    position: string;
}


@Component({
    moduleId: module.id,
    selector: 'my-image-panel',
    templateUrl: './my-image-panel.component.html'
})
export class MyImagePanelComponent extends Base {
    image: MyImage;
    selectImageSrc = "";
    constructor(public router: Router, public el: ElementRef, public appService: AppService) { super(router) }

    show() {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }

    selectImage(inputElement) {
        var file = inputElement.files[0];
       var reader = new FileReader();
       reader.onload=(event)=>{this.selectImageSrc=event.target['result'];this.$(this.el.nativeElement).find('.preview').attr('src', this.selectImageSrc).show();}
       reader.readAsDataURL(file);
    }

    addMyImage() {
        var image: MyImage = {
            "part": "my-image",
            "title": "图片",
            "width": "300px",
            "height": "60px",
            left: "200px",
            top: "50px",
            "position": "absolute",
            src: ""
        }
        image.src=this.selectImageSrc;
        this.appService.addPart(this.path, image)
    }

    
}