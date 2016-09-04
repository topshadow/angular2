import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Base} from '../../../../base';

@Component({
    moduleId:module.id,
    selector:'user-image',
    templateUrl:'./user-image.component.html'
})
export class UserImageComponent extends Base {
    constructor(public router:Router){
        super(router);
    }
    
}