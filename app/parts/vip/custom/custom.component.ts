import {Component} from '@angular/core';

@Component({
    selector:'custom',
    templateUrl:'app/parts/vip/custom/custom.html',
    styles:[`
    textarea{
        width:100%;
        height:300px;
    }
    `]

})
export class CustomComponent{
    
    html:string="";

    css:string="";
    constructor(){}
}
