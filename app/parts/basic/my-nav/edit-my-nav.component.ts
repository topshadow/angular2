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

    public styles=['style1','style2'];
    selectedStyle='style1';

    constructor(private appService: AppService) {}


    selectStyle(style:string){
        this.selectedStyle=style;
    //保存样式
        this.appService.saveNavStyle(style);

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
