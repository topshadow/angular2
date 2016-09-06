import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../app.service';
import {Base} from '../../../base';

@Component({
    moduleId:module.id,
    selector:'my-forms',
    templateUrl:'./my-forms.component.html'
})
export class MyFormsComponent extends Base{
    constructor(private appService:AppService,public router:Router){
        super(router)
    }

    
}