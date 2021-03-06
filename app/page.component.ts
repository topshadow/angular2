import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from './app.service';

@Component({
    moduleId:module.id,
    selector: 'page',
    templateUrl:'./page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
    path: string;
    page: any;
    nav: any;
    constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) { }

    ngOnInit() {
        var user =this.appService.userService.user;
        // console.log(user);
        this.appService.setWebsiteData(user.websiteData);
        this.appService.setNavData(user.websiteData['nav']);
        this.appService.setPagesData(user.websiteData['pages']);
    
        this.path = this.router.url.replace('/', '');
        this.route.params.subscribe(params => {
            this.path = params['path']; // (+) converts string 'id' to a number
            this.page = this.appService.getPagesData().find(page => page.path == this.path);
            this.nav = this.appService.getNavData();
            console.log(params);
        });
        this.route.params.subscribe(params => {
            console.log('compare :',params);
            window['isEdit'] =  params['isEdit'] == 'true' ? true : false;
        })
    }
    

    ngOnDestroy() {
        console.log('page component is destory');
    }
}