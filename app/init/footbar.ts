import {Component,Input} from '@angular/core';

@Component({
    selector:'footbar',
    template:`
<h1>页脚</h1>`
    })
export class Footbar{
    @Input()
    public data;

}