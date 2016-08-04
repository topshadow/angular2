import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {DomSanitizationService} from '@angular/platform-browser';
@Component({
    selector:'custom-textarea',
    template:`
<span  [innerHtml]="innerHtml"></span>
`
})
export class  CustomTextarea implements  OnInit{

    constructor(private sanitizer : DomSanitizationService){}

  @Input()
    innerHtml;
@Input()
    public    serverPhone;
    ngOnInit():any {
        this.serverPhone =this.sanitizer.bypassSecurityTrustHtml(this.innerHtml);
    }



}
