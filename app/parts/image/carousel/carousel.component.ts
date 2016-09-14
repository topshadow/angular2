import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

class Carousel {
    carouselImages: string[];

}

@Component({
    moduleId: module.id,
    selector: 'carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent extends Base implements OnInit {
    @Input() carousel: Carousel;

    constructor(public router: Router, public appService: AppService, public el: ElementRef) {
        super(router);

    }

    carouselTo(num: number) {
        this.$(this.el.nativeElement).find('.carousel').carousel(num);
    }

    ngOnInit() {
        this.$(this.el.nativeElement).find('.carousel').carousel({ interval: 2000 });
    }

    deleteCarouselImage(num: number) {
        this.$(this.carousel.carouselImages.splice(num, 1));
    }

    addCarouselImage(file) {
        var reader = new FileReader();
        reader.onload = (event) => { this.carousel.carouselImages.push(event.target['result']); }
        reader.readAsDataURL(file);
    }

}