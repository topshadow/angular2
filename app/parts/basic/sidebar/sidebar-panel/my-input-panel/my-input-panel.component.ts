import {Component,ElementRef} from  '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../../../base';
import {MyInputService} from '../../../../text/my-input/my-input.service';

@Component({
    moduleId:module.id,
    selector:'my-input-panel',
    templateUrl:'./my-input-panel.html',
    providers:[MyInputService],
    styleUrls:['./my-input-panel.css']
})
export class MyInputPanelComponent extends  Base{

    constructor(router:Router,public myInputService:MyInputService,public el:ElementRef){
        super(router);
    }

    show(){
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }
    
    addH1Input(){
        this.myInputService.addH1Input(this.path);
    }

    addH2Input(){
        this.myInputService.addH2Input(this.path);
    }

    addH3Input(){
        this.myInputService.addH3Input(this.path);
    }
    
    addH4Input(){
        this.myInputService.addH4Input(this.path);
    }

    

}