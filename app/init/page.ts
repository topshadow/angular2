import {Component,Input,OnInit,TemplateRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PageComponent} from './page-component'


@Component({

    template:`
    这是一个angular页面
    <pagecomponent [data]="pageComponent" *ngFor="let pageComponent of pageComponents"></pagecomponent> 
`,
    directives:[PageComponent]
})
export class Page implements OnInit{
    @Input()
    public data;

    public pageComponents;
    public currentPath ;
    constructor(private router:Router,private route:ActivatedRoute){}
    ngOnInit(){
        this.currentPath =  this.router.url.replace('/','');
        console.log('current page route path',this.currentPath);
        var currentPage = window['pages'].find(page=>page.path==this.currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
    }


}