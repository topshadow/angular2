import {Component,ElementRef,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../../../app.service';
import {Base} from '../../../../../base';

@Component({
    moduleId:module.id,
    selector:'container-panel',
    templateUrl:'./container-panel.component.html',
    styleUrls:['./container-panel.component.css']
})
export class ContainerPanelComponent extends Base implements OnInit{
    selectedRectangle:string;
    constructor(router:Router,private appService:AppService,private el:ElementRef){super(router);}

    /**
     * 编辑模式进入显示,预览模式不显示侧边栏
     */
    ngOnInit(){
       
    }

    show(){
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }

    selectRectangle(rectangleClass:string){
        this.$(this.el.nativeElement).find('#preview').attr('class',rectangleClass);
        this.selectedRectangle=rectangleClass;
    }


    addRectangle(){
        if(!this.selectedRectangle)return ;
        this.appService.addPart(this.path,{
         part:'rectangle',
         backgroundColor:'white',
         width:'200px',
         height:'40px',
         position:'relative',
         zIndex:3
        });
    }
    

}