import {Component,Input } from '@angular/core';

@Component({
    selector:`service-content`,
    template:`<h1>this is service-content</h1>
<h1>service content name:<input type="text" [(ngModel)]="data.name"></h1>
<h1>contentType {{data.component}}</h1>


`
})
export class  ServiceContent{
    @Input()
    data

}