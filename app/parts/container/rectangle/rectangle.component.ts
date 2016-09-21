import {Component,OnInit,ElementRef,Input,HostListener} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

class Rectangle{
    width:string;
    height:string;
    backgroundColor:string;
    zIndex:number;

}

@Component({
    moduleId:module.id,
    selector:'rectangle',
    templateUrl:'./rectangle.component.html',
    styleUrls:['./rectangle.component.css']
})
export class RectangleComponent extends Base implements OnInit{
    @Input() rectangle:Rectangle;

    @HostListener('mouseover',['$event'])
    showProperty(event){
            
    }
    constructor(router:Router,public el:ElementRef,private appService:AppService){super(router)}
    ngOnInit(){
        this.$('.tooltip-show').tooltip('show');
    }

    upZIndex(){
        this.rectangle.zIndex++;
    }
    
    downZIndex(){
        this.rectangle.zIndex--;
    }

    topZIndex(){
        this.rectangle.zIndex=10;
    }

    bottomZIndex(){
        this.rectangle.zIndex=0;
    }

    deleteMe(){
        this.appService.deletePart(this.path,this.rectangle);
    }

    changeBackgroundColor(backgroundColor){
            this.rectangle.backgroundColor=backgroundColor;
    }
    
    
}