import {Component,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CAROUSEL_DIRECTIVES,MODAL_DIRECTIVES, BS_VIEW_PROVIDERS,ModalDirective,TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

class Image{
    image:string;
    text:string;
}

@Component({
    selector: 'banner-1-component',
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES,MODAL_DIRECTIVES,TAB_DIRECTIVES],
    templateUrl: 'app/pages/component/banner/banner-1-component.html',
    styleUrls:['app/pages/component/banner/banner-1-component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders:[BS_VIEW_PROVIDERS]
})
export class Banner1Component {
    @ViewChild('childModal') public childModal: ModalDirective;
    public currentEditImage:Image;
    get isEdit(){
        return window['isEdit'];
    }

    isShow=false;
    toggleIsShow(){
        this.isShow=!this.isShow;
    }

    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<Image> = [
        {"image":"http://img2.niutuku.com/desk/1208/1533/ntk-1533-42694.jpg",
          "text":"这是对第一张图片的介绍"},
        {"image":"http://img.tuku.cn/file_big/201502/6c1298bc8e044515bf48a2e277fe0ebe.jpg",
            "text":"这是图片2"},
        {"image":"http://img.tuku.cn/file_big/201502/89448ed96e524552a46abce14fab2eb8.jpg",
            "text":"这是图片3"}
        ];

    // public constructor() {
    //     for (let i = 0; i < 4; i++)
    //         this.addSlide();
    //     }
    // }
    //
    //
    // public addSlide():void {
    //     let newWidth = 600 + this.slides.length + 1;
    //     this.slides.push({
    //         image: `//placekitten.com/${newWidth}`,
    //         text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
    //          ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    //     });
    // }

    addOneSlide(image:Image){
        this.slides.push(image);
    }
    deleteOneSlide(image:Image){
        var index =this.slides.indexOf(image);
        var after =this.slides.slice(index+1);
            this.slides = this.slides.slice(0,index).concat(after);
    }
    editSlide(image:Image){

    }

    setCurrentEditMenu(image:Image){
        this.currentEditImage= image;
    }
    public removeSlide(index:number):void {
        this.slides.splice(index, 1);
    }

    hideModel(){
        console.log('hideModel');
    }
}