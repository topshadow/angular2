import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../../../base';

class IconStyle{
    prefix = 'fa';
    type:string;
    size:'fa-lg' | 'fa-2x' | 'fa-3x' | 'fa-4x' | 'fa-5x'='fa-5x';
    rotatable:'' |'fa-spin' | 'fa-pulse'='';

    constructor(type:string){
        this.type= type;
    }

    toString(){
        return this.prefix+this.type+this.size+this.rotatable;
    }

}


@Component({
    moduleId: module.id,
    selector: 'my-icon-panel',
    templateUrl: './my-icon-panel.component.html'
})
/**
 *  找出能够大量减少该类继承的代码,
 * 例如,使用手动加载依赖,加载router
 */
export class MyIconPanelComponent extends Base {
    public selectedIcon: HTMLElement;
    public previewIcon:IconStyle;
    
    constructor(router: Router, public el: ElementRef) { super(router) }

    show() {
        this.$(this.el.nativeElement).find('.modal').modal('toggle');
    }

    selectIcon(iconType:string) {
        this.previewIcon = new  IconStyle(iconType);
    }

    setPreviewIconStyle(style:{key:string,value:string}){
             this.previewIcon[style.key]=style.value;
    }

    get selectedIconClass(){
        return this.$(this.selectedIcon).attr('class');// + this.addedStyles.join(' ');
    }

    
}


