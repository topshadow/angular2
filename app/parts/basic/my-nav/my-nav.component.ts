import {Component, Input} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-nav',
    templateUrl: './my-nav.html',
    styleUrls: ['./style1.css', './style2.css']
})
export class MyNavComponent {
    @Input()
    nav: any;
    navMenuList: any;
    styles = ['style1', 'style2'];

    count: number = 0;
    btnClass: string;

    innerHtml: string;

    addCount() {
        this.count++;
        console.log(this.count);
    }
}