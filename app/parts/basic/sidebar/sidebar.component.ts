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
    @Input()
    parts;
    page;
    text = "文本框";


    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        public router: Router,
        private dragulaService: DragulaService
    ) {
        super(router);

    }
    ngOnInit() {
        this.dragulaService.setOptions('canDrag', {
            removeOnSpill: true
        });
        this.dragulaService.drag.subscribe((value) => {
            console.log(`drag: ${value[0]}`);
            this.onDrag(value.slice(1));
        });
        this.dragulaService.drop.subscribe((value) => {
            console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        });
        this.dragulaService.over.subscribe((value) => {
            console.log(`over: ${value[0]}`);
            this.onOver(value.slice(1));
        });
        this.dragulaService.out.subscribe((value) => {
            console.log(`out: ${value[0]}`);
            this.onOut(value.slice(1));
        });
        this.route.params.subscribe(params => {
            var path = params['path'];
            this.page = this.appService.getPage(path);
        })
    }


    onDrag(args) {
        let [e, el] = args;
        console.log('onDrag->  e:', e, 'el:', el);
        // do something
    }

    onDrop(args) {
        let [e, el] = args;
        console.log('onDrop->e:', e, 'el:', el);
        // do something
    }

    onOver(args) {
        let [e, el, container] = args;
        console.log('onOver->e:', e, 'el:', el, 'container:', container);
        // do something
    }

    onOut(args) {
        let [e, el, container] = args;
        console.log('onOut->e:', e, 'el:', el, container);
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
            part: 'input', name: '文本框', text: '文本框1', height: "46px", left: "275px",
            position: "relative", title: "文本框", top: "-229px", width: "375px"
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
}

