import  {Component,Input,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

class Carousel{

}

@Component({
    moduleId:module.id,
    selector:'carousel',
    templateUrl:'./carousel.component.html'
})
export class CarouselComponent extends Base{
    @Input() carousel:Carousel;

    constructor(public router:Router,public appService:AppService){super(router);}


}