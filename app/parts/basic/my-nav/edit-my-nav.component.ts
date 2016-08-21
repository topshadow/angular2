import {Component, Input} from '@angular/core';
import {AppService} from '../../../app.service';
import {Page} from '../../../model/index';


interface Menu {
    path: string;
    title: string;
    subMenu: any[];
}

@Component({
    moduleId: module.id,
    selector: 'edit-my-nav',
    templateUrl: './edit-my-nav.html'
})
export class EditMyNavComponent {
    @Input()
    nav;

    constructor(private appService: AppService) {

    }

    addPage(page: Page) {
        this.appService.addPage(page);
    }

    deletePage(menu: Menu) {
        this.appService.deletePage(menu.path);
    }

    upPage(menu: Menu) {
        this.appService.upPage(menu.path);
    }

    downPage(menu: Menu) {
        this.appService.downPage(menu.path);
    }



}
