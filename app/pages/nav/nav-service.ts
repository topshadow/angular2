import {Injectable} from '@angular/core';
import {Nav} from './nav';
import {Menu} from './nav';

@Injectable()
export class NavService{
    public nav:Nav;

    constructor(){

    }

    setNav(nav : Nav){
        this.nav =nav;
    console.log('nav:',this.nav);
    }

    addFirstMenu(menu:Menu,isCustomerMenuUrl:boolean,customerUrl){
        if(!isCustomerMenuUrl){
            menu.url = Math.round(Math.random() * 10000) + menu.name;
        }else{
            menu.url = customerUrl;
        }
        this.nav.menuList.push(menu);
        console.log(menu.url);
        window['pages'].push({
            "path": menu.url,
            "components": [
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page component1",
                    "componentType": "banner"
                },
                {
                    "component": "Banner1Component",
                    "selector": "Banner1",
                    "name": "index page comppnent2",
                    "componentType": "s"
                }
            ]
        })
    }

    addSecondaryMenu(firstMenu:Menu,secondaryMenu:Menu,isCustomerUrl,customerUrl){
        var menu = this.nav.menuList.find((menu)=> menu.url == firstMenu.url);
        if(isCustomerUrl){
            secondaryMenu.url=customerUrl;
            menu.secondaryMenu.push(secondaryMenu);
            //添加页面的组件
            window['pages'].push({
                "path": secondaryMenu.url,
                "components": [
                    {
                        "component": "Banner1Component",
                        "selector": "Banner1",
                        "name": "index page component1",
                        "componentType": "banner"
                    },
                    {
                        "component": "Banner1Component",
                        "selector": "Banner1",
                        "name": "index page comppnent2",
                        "componentType": "s"
                    }
                ]
            });
        }else {
            secondaryMenu.url = Math.round(Math.random() * 10000) + secondaryMenu.name;
        }
    }

    getServerPhone(){
        return this.nav.serverPhone;
    }
    setServerPhone(serverPhone:string){
        this.nav.serverPhone=serverPhone;
    }

    getMenuList(){
        return this.nav.menuList;
    }

    deleteMenu(menu:Menu){
        for(let currentMenu of this.nav.menuList){
            if(currentMenu == menu){
                let elIndex = this.nav.menuList.indexOf(currentMenu);
                var after:Menu[] = this.nav.menuList.splice(elIndex+1);
                this.nav.menuList = this.nav.menuList.splice(0,elIndex).concat(after);
                return true;
            }
            for(let subMenu of currentMenu.secondaryMenu){
                let elIndex = currentMenu.secondaryMenu.indexOf(menu);
                let subAfter= currentMenu.secondaryMenu.splice(elIndex+1);
                currentMenu.secondaryMenu = currentMenu.secondaryMenu.splice(0,elIndex).concat(subAfter);
                return true;
            }
        }
    }

}
