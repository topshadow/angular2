import {Component,Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavComponent}  from '../pages/index';

@Component({
    selector:'navbar',
    template:`
<div [ngSwitch]="data.component">
<nav-component *ngSwitchCase="'NavComponent'" [data]="data"> </nav-component>

</div>
`,
    directives:[ROUTER_DIRECTIVES,NavComponent]

})
export class Navbar{
    @Input()
    public data;
    @Input()
    public menu ;
    @Input()
    public menuList;


}
