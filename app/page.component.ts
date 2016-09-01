import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from './app.service';

@Component({
    selector: 'page',
    template: `    
    <image-choose></image-choose>
      <topbar ></topbar>
        <my-nav [nav]="nav" ></my-nav>
        
    <ul  [dragula]='"dragpart"' [dragulaModel]="page.parts">
    <li *ngFor="let part of page.parts"  >
        <div [ngSwitch]="part.part"> 
            <my-image *ngSwitchCase="'my-image'" [myImage]="part"></my-image>
            <my-input *ngSwitchCase="'input'" [myInput]="part"></my-input>
            <banner *ngSwitchCase="'banner'"  [banner]="part" ></banner>
            <showcase *ngSwitchCase=" 'showcase' " [showcase]="part"></showcase>
            <dynamic *ngSwitchCase="'dynamic'" [dynamic]="part"></dynamic>
        </div>

    </li>
  </ul>
    `
})
export class PageComponent implements OnInit, OnDestroy {
    path: string;
    page: any;
    nav: any;
    constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) { }

    ngOnInit() {
               console.log('snapshot',this.route.snapshot.queryParams);

        this.path = this.router.url.replace('/', '');

        this.route.params.subscribe(params => {
            this.path = params['path']; // (+) converts string 'id' to a number
            this.page = this.appService.getPagesData().find(page => page.path == this.path);
            this.nav = this.appService.getNavData();
            console.log(params);
        });
        this.route.queryParams.subscribe(params => {
            window['isEdit'] = params['isEdit'] || params['isEdit'] == 'true' ? true : false;
        })
    }
    ngOnDestroy() {
        console.log('page component is destory');
    }
}