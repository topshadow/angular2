import {Component,OnInit,TemplateRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({

    template:`
    这是一个angular页面
`
})
export class Page implements OnInit{
    constructor(private router:Router,private route:ActivatedRoute){}

    ngOnInit(){

   console.log(this.router.url);
        var currenPath = this.router.url.replace('/','');
        var pageData = window['pages'].find(page=>page.path==currenPath);
        console.log(pageData);
    }


}