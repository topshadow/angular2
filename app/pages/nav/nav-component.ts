import {Component,Input,ViewChild,ElementRef,OnInit} from '@angular/core';
import {ControlContainer,CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {DomSanitizationService} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from  '@angular/router';

import {BUTTON_DIRECTIVES, ButtonRadioDirective,
    ButtonCheckboxDirective,MODAL_DIRECTIVES, BS_VIEW_PROVIDERS,ModalDirective,TAB_DIRECTIVES} from  'ng2-bootstrap/ng2-bootstrap';

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

    setCurrentEditMenu(menu:Menu){
        this.currentEditMenu = menu;
    }
    getCurrentEditMenu(){
        return this.currentEditMenu;
    }
    saveCurrentEditMenu(menu:Menu){
        this.currentEditMenu=menu;
    }

    @Input()
    public currentMenu;
    public editState = false;

    get isEdit(){
        return window['isEdit'];
    }

    @Input()
    public currentEditMenu:Menu;

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


    addFirstMenu(menu:Menu,isCustomeUrl:boolean,customerUrl){
        debugger;
        this.navService.addFirstMenu(menu,isCustomeUrl,customerUrl);
    }

    //新增一级菜单

    addSecondaryMenu(firstMenuStr:string,secondaryMenu:Menu,isCutomerUrl,customerUrl){
            let firstMenu:Menu = JSON.parse(firstMenuStr);
           this.navService.addSecondaryMenu(firstMenu,secondaryMenu,isCutomerUrl,customerUrl);

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

    deleteMenu(menu:Menu){
        //如果是一级导航
      this.navService.deleteMenu(menu);

    }


    changeH1Color(){
        window['$'](this.el.nativeElement).find('h1').css('color','blue');
    }


}