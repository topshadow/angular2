
import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../../app.service';

import {Base} from '../../../base';

import {MyImagePanelComponent, MyInputPanelComponent, MyButtonPanelComponent, ShapePanelComponent, MyIconPanelComponent, CarouselPanelComponent, ContainerPanelComponent} from './sidebar-panel/index';





@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: `./sidebar2.html`,
    directives: [MyInputPanelComponent, MyImagePanelComponent, MyButtonPanelComponent, ShapePanelComponent, MyIconPanelComponent, CarouselPanelComponent, ContainerPanelComponent],
    styleUrls: ['./sidebar.css'],

})
export class SideBarComponent extends Base implements OnInit {
    @Input() parts;
    page;

    static ComponentTypes = []

    constructor(
        private appService: AppService,
         router: Router,
        private el: ElementRef
    ) {
        super(router);

    }

    ngOnInit() {
        if (window['isEdit']) {
            this.$(this.el.nativeElement).show()
        } else {
            this.$(this.el.nativeElement).hide();
        }

    }



    show(type: string) {
        switch (type) {
            case 'input':
                console.log('input')
                break;
        }

    }

    dropPart(e) {
        e.target.style.postion = "relative";
        e.target.style.left = e.clientX;
        e.target.style.top = e.clientY;
    }

    addMyInput(type: string) {
        console.log('add myInput:', type);
        this.appService.addPart(this.path, {
            type: type,
            part: 'input', name: '文本框', innerHTML: '文本框1', height: "46px", left: "275px",
            position: "relative", title: "文本框", top: "229px", width: "375px"
        });
    }

    addMyImage(style: string) {
        this.appService.addPart(this.path, {
            part: 'my-image',
            style: style,
            title: "图片",
            src: "http://img2.imgtn.bdimg.com/it/u=395920684,863299018&fm=21&gp=0.jpg"
        });
    }


    saveWebsiteData() {
        this.appService.userService.setWebsiteData(window['websiteData']);
    }

    clearWebsiteData() {
        localStorage.clear();
    }

    addMyButton(style: string) {
        this.appService.addPart(this.path, {
            style: style,
            part: 'my-button', text: '按钮', height: "46px", left: "275px",
            position: "relative", title: "按钮", top: "-229px", width: "375px"
        });
    }

    preview() {
        this.isEdit = false;
        this.$('.my-toolbar').hide();
        this.$('.ui-rotatable-handle').hide();
        this.$('.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se').hide();
    }

    edit() {
        this.isEdit = true;
        this.$('.ui-rotatable-handle').show();
        this.$('.ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se').show();

    }

    saveWebsite() {
        this.appService.userService.websiteData = window['websiteData'];
        // localStorage.setItem('websiteData', window['websiteData']);
    }

 


    hideMenu(menuList) {
        this.$("#wqdpageLeft").hide();
        // this.$()
    }
    showMenu(){
        this.$("#wqdpageLeft").show();
    }

}

