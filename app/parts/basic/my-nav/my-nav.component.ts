import {Component,Input} from '@angular/core';


@Component({
    selector:'my-nav',
    templateUrl:'app/parts/basic/my-nav/my-nav.html'
})
export class MyNavComponent{
   @Input()
   nav:any;
    
    navMenuList:any;
    

    count:number=0;
    btnClass:string;

    innerHtml:string;

    addCount(){
        this.count++;
        console.log(this.count);
    }
}