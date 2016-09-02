import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:"base",
    template:''
})
export class Base{
    constructor(public router:Router){}
    
    get isEdit(){
        return window['isEdit']
    }

    get $(){
        return window['$'];
    }

}