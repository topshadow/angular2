/// <reference path="./my-icon.d.ts" />
import {Component, Input, OnInit, HostListener, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../../base';
import {AppService} from '../../../app.service';

@Component({
    moduleId: module.id,
    selector: 'my-icon',
    templateUrl: './my-icon.component.html'
})
export class MyIconComponent extends Base implements OnInit {
    @Input() myIcon: MyIcon;
    menuList: Menu[];
    selectedIconLinkName: string;

    constructor(private appService: AppService, private el: ElementRef, public router: Router) {
        super(router);
        this.menuList = this.appService.getMenuList();
        
    }

    mouseEnterStyle(el) {
        console.log(el);
        this.$(el).css({
            color: this.myIcon.hoverColor
        })
    }

    mouseLeaveStyle(el) {
        this.$(el).css({
            color: this.myIcon.color
        })
    }


    ngOnInit() {
    }

    changePosition(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myIcon);
        this.myIcon.left = left;
        this.myIcon.top = top;
        this.myIcon.position = position;
    }


    dragStart(e) {
        console.log(e);
    }

    resizeStop(e) {
        this.myIcon.width = e.target.style.width;
        this.myIcon.height = e.target.style.height;
    }


    changeIconLink(menu: Menu) {
        this.myIcon.link = menu.path;
        this.addIconLink(menu.path);
        this.selectedIconLinkName = menu.title;
        this.selectedIconLinkName = menu.title;
    }

    addIconLink(path: string) {
        path = path.indexOf('/') == 0 ? path : "/" + path;
        this.$(this.el.nativeElement).find('.myIcon').unbind('click').click(() => {
            this.router.navigate([path]);
        })
    }

    useExternalLink(externalLink: string) {
        console.log(externalLink, this.myIcon.useNewFrameOpen);
        if (!externalLink) {
            return;
        }
        externalLink = externalLink.indexOf("http://") == 0 ? externalLink : "http://" + externalLink;
        this.$(this.el.nativeElement).find('.myIcon').unbind('click').click(() => {
            if (externalLink) {
                window.open(externalLink);
            } else {
                location.href = externalLink;
            }
        })
    }

    toggleNewFrame() {
        this.myIcon.useNewFrameOpen = !this.myIcon.useNewFrameOpen;
    }


}