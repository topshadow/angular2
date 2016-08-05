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

    addFirstMenu(menu:Menu){
        this.nav.menuList.push(menu);
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


}
