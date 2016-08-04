import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {CAROUSEL_DIRECTIVES}  from 'ng2-bootstrap/ng2-bootstrap'

@Component({
    selector: 'banner-1-component',
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: 'app/pages/component/banner/banner-1-component.html'
})
export class Banner1Component {
    public myInterval:number = 5000;
    public noWrapSlides:boolean = false;
    public slides:Array<any> = [];

    public constructor() {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }

        console.log('sides',this.slides);
    }

    public addSlide():void {
        let newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: `//placekitten.com/${newWidth}/300`,
            text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        });
    }

    public removeSlide(index:number):void {
        this.slides.splice(index, 1);
    }
}