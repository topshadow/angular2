import {Component,Input } from '@angular/core';

@Component({
    selector:`service-content`,
    templateUrl:`app/pages/component/service-content/service-content.html`,
    styleUrls:['app/pages/component/service-content/service-content.css']
})
export class  ServiceContent{
    @Input()
    data

}