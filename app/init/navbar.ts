import {Component,Input} from '@angular/core';


@Component({
    selector:'navbar',
    template:`{{data.name}}  {{data.content}}`
})
export class Navbar{
@Input()
    data;
}
