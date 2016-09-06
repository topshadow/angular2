import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../../app.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {Base} from '../../../base';



@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: `./sidebar.html`,
    styleUrls: ['./sidebar.css'],

})
export class SideBarComponent extends Base implements OnInit {
    @Input() parts;
    page;
    text = "文本框";

    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        public router: Router
    ) {
        super(router);

    }

    ngOnInit() {
    }

    onDrag(args) {
        let [e, el] = args;
        console.log('onDrag->  e:', e, 'el:', el);
        // do something
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
        })
    }


    saveWebsiteData() {
        localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
    }

    clearWebsiteData() {
        localStorage.setItem('websiteData', '');
    }

    addMyButton(style:string){
         this.appService.addPart(this.path, {
            style:style,
            part: 'my-button', text: '按钮', height: "46px", left: "275px",
            position: "relative", title: "按钮", top: "-229px", width: "375px"
        });
    }
}

