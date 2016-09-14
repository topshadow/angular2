import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

@Component({
    moduleId:module.id,
    selector:'my-nav',
    templateUrl:'./my-nav.component.html',
    styleUrls:['my-nav.component.css']
})
export class MyNavComponent extends Base implements OnInit{
    @Input() nav;
    constructor(router:Router,public el:ElementRef){super(router)}

    ngOnInit(){
        
    }

    

}


