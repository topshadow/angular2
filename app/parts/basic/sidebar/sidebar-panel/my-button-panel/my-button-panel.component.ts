import {Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../../../base';
import {MyButtonService} from '../../../../button/my-button/my-button.service';

@Component({
    moduleId:module.id,
    selector:'my-button-panel',
    providers:[MyButtonService],
    templateUrl:'./my-button-panel.component.html',
    styleUrls:['./my-button-panel.css']
})
export class MyButtonPanelComponent extends Base{
    constructor(router:Router,public el:ElementRef,public buttonService:MyButtonService){super(router)};
    
    show(){
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }
    addInfo1Button(){
        this.buttonService.addInfo1Button(this.path);
    }

    addInfo2Button(){
        this.buttonService.addInfo2Button(this.path);
    }

    addSuccessButton(){
        this.buttonService.addSuccessButton(this.path);
    }

    addPrimaryButton(){
        this.buttonService.addPrimaryButton(this.path);
    }
    addWarningButton(){
        this.buttonService.addWarningButton(this.path);
    }
    addDangerButton(){
        this.buttonService.addDangerButton(this.path);
    }

}