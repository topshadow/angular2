import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../../app.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import {Base} from '../../../base';

function getOption() {
    return [
        {
            "part": "input",
            "title": "文本框"
        },
        {
            "part": "banner",
            "title": "横幅",
            "images": [
                {
                    "src": "http://10500322.s21i-10.faiusr.com/2/ABUIABACGAAg3sWuuwUo4620pgIwgA84vAU.jpg",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                },
                {
                    "src": "images/banner2.png",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                },
                {
                    "src": "images/CMS_06.png",
                    "title": "<div class='carousel-captionbannerText'><h3 class='text-left'>旅烨帮助民族企业与世界互联</h3><p class='text-left'>为您提供更好的网站后台管理系统</p><button class='btnbtn-primary'><i class='iconglyphiconglyphicon-arrow-down'></i>正式下载</button></div>"
                }
            ]
        },
        {
            "part": "showcase",
            "title": "案例展示"
        },
        {
            "part": "dynamic",
            "title": "动态"
        }
    ];
}

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
    optionGroups = getOption();

    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        public router:Router,
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
        // do something
        this.optionGroups = getOption();
    }


    dropPart(e) {

        e.target.style.postion = "relative";
        e.target.style.left = e.clientX;
        e.target.style.top = e.clientY;
        this.optionGroups = getOption();
  
    }
}

