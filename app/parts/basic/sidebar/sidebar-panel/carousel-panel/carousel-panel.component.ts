import {Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../../../base';
import {AppService} from '../../../../../app.service';


class Carousel{
    carouselImages:string[];
}

@Component({
    moduleId:module.id,
    selector:'carousel-panel',
    templateUrl:'./carousel-panel.component.html'
})
export class CarouselPanelComponent extends Base {
    carousel:Carousel;

    constructor(router:Router,public appService:AppService,public el:ElementRef){super(router);
        this.carousel={carouselImages:[]};    
    }
    
    show(){
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }
    addSrc(addImageInput){
         var file = addImageInput.files[0];
       var reader = new FileReader();
       reader.onload=(event)=>{this.carousel.carouselImages.push(event.target['result'])};
       reader.readAsDataURL(file);

    }
    
    addCarousel(){
        this.appService.addPart(this.path,{});
    }


}