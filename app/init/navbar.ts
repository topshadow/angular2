import {Component,Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector:'navbar',
    template:`<h1>导航栏</h1>
<ul>

<li *ngFor="let menu of data.menuList" >
<a [routerLink]="[menu.path]" routerLinkActive="active">{{menu.name}}</a>
 
</li>
 
</ul>
`,
    directives:[ROUTER_DIRECTIVES]

})
export class Navbar{
    @Input()
    public menu ;
    @Input()
    public menuList;
    @Input()
    public data :any;

}
