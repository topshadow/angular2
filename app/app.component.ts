import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';
interface User {
    id: string;
}

@Component({
    selector: 'my-app',
    template: `
    <view-child-parent></view-child-parent>
    <local-variable-parent></local-variable-parent>
    <version-parent></version-parent>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    user: User;
    constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        //网站标题
        this.titleService.setTitle('旅烨建站');
 
  
    }



}
