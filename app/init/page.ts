import {Component,OnInit,TemplateRef} from '@angular/core';


@Component({
    template:`
    这是一个angular页面
`
})
export class Page implements OnInit{

    ngOnInit(){

    console.log(this.template)
    }

}