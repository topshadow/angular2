import {Injectable} from '@angular/core';
import {Page} from './model/page.model';

import {Base} from './base';

@Injectable()
export class AppService extends Base{
    getWebsiteData() {
        return window['websiteData'];
    }

    getNavData() {
        return window['nav'];
    }

    getPagesData() {
        return window['pages'];
    }

    getPage(path: string) {
        return window['pages'].find(page => page.path == path);
    }

    addPage(page: Page) {
        window['nav'].menuList.push(
            {
                path: page.path,
                title: page.title,
                subMenu: []
            }
        );
        window['pages'].push(page);
    }

    deletePage(path: string) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var before = window['nav'].menuList.slice(0, index);
        var after = window['nav'].menuList.slice(index + 1);
        window['nav'].menuList = before.concat(after);
    }

    upPage(path: string) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var beforeElement = window['nav'].menuList[index - 1];
        window['nav'].menuList[index] = beforeElement;
        window['nav'].menuList[index - 1] = menu;

    }
    downPage(path: string) {
        var menu = window['nav'].menuList.find(menu => menu.path == path);
        var index = window['nav'].menuList.indexOf(menu);
        var afterElement = window['nav'].menuList[index +1];
        window['nav'].menuList[index] = afterElement;
        window['nav'].menuList[index+1] = menu;
    }

    saveNavStyle(style:string){
        window['nav'].selectedStyle=style;
    }

    deletePart(path:string,part:Object){
        console.log(path);
            this.getPage(path).parts.remove(part);
    }

}