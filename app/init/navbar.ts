import {Component,Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Navbar1Component}  from '../pages/index';

@Component({
    selector:'navbar',
    template:`
    <div [ngSwitch]="data.component">
      <navbar-1-component *ngSwitchCase="'Navbar1Component'" [data]="data"> </navbar-1-component>
    </div>
`,
    directives:[ROUTER_DIRECTIVES,Navbar1Component]

})
export class Navbar{
    @Input()
    public data;
    @Input()
    public menu ;
    @Input()
    public menuList;


}
