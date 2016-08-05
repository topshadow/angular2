import {Component,Input,ViewChild,ElementRef,Injector,OnInit} from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {ROUTER_DIRECTIVES} from  '@angular/router';
import {TAB_DIRECTIVES,BUTTON_DIRECTIVES, ButtonRadioDirective, ButtonCheckboxDirective} from  'ng2-bootstrap/ng2-bootstrap';
import {ControlContainer,CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {RadioDirective} from '../../directive/index';
import {CustomTextarea} from '../tool/custome-textarea/custom-textarea';
import {NavService} from './nav-service';
import  {Nav,Menu} from './nav';
import {Json2Object}  from '../../pipe/index';



@Component({
    selector:'nav-component',
    templateUrl:'app/pages/nav/nav-component.html',
    viewProviders:[BS_VIEW_PROVIDERS],
    styleUrls:[`app/pages/nav/nav-component.css`],
    directives:[MODAL_DIRECTIVES,CORE_DIRECTIVES,
        ROUTER_DIRECTIVES,TAB_DIRECTIVES,CustomTextarea,BUTTON_DIRECTIVES,FORM_DIRECTIVES,
        ButtonRadioDirective, ButtonCheckboxDirective,
        RadioDirective
    ],
    providers:[ControlContainer,NavService],
    pipes:[Json2Object]
})
export class NavComponent implements OnInit{
    nav:Nav;



    @ViewChild('childModal') public childModal: ModalDirective;

    constructor(private navService:NavService,
        private el:ElementRef,
        private sanitizer: DomSanitizationService){}

    menu:Menu;
    showWysiwyg=false;

    @Input()
    public innerHtml;

    @Input()
    public serverPhone;

    @Input()
    public data;


    @Input()
    public currentMenu;
    public editState = false;

    get isEdit(){
        return window['isEdit'];
    }



    ngOnInit() {
        //编辑器
        window['$'](this.el.nativeElement).find('#serverPhoneTextarea')
       .wysihtml5({
            "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
            "emphasis": true, //Italics, bold, etc. Default true
            "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
            "html": false, //Button which allows you to edit the generated HTML. Default false
            "link": true, //Button to insert a link. Default true
             //Button to insert an image. Default true,
            "color": true, //Button to change color of font
            "blockquote": true, //Blockquote
            "size": "24px" //default: none, other options are xs, sm, lg
        });
       this.navService.setNav(this.data);
    }







    //获取菜单列表
    get  firstMenuList(){
        return this.data.menuList;
    }


    addFirstMenu(menu:Menu){
        this.navService.addFirstMenu(menu);
    }

    //新增一级菜单

    addSecondaryMenu(oldMenuStr:string,newMenu:Menu){
            let oldMenu:Menu = JSON.parse(oldMenuStr);
            var menu = this.firstMenuList.find((menu)=> menu.name == oldMenu.name);
            newMenu.url = Math.round(Math.random() * 10000) + newMenu.name;
            menu.secondaryMenu.push(newMenu);

            //添加页面的组件
            window['pages'].push({
                "path": newMenu.url,
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

    }

    saveServerPhone(serverPhone){
        this.data.serverPhone =this.sanitizer.bypassSecurityTrustHtml(serverPhone);
        // this.data.serverPhone = serverPhone;
    }

    uploadImage(target) {
        var reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        var data = this.data;
    }


    changeH1Color(){
        window['$'](this.el.nativeElement).find('h1').css('color','blue');
    }


}