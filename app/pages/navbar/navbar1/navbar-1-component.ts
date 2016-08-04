import {Component,Input,ViewChild,ElementRef,Injector,OnInit} from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {ROUTER_DIRECTIVES} from  '@angular/router';
import {TAB_DIRECTIVES,BUTTON_DIRECTIVES, ButtonRadioDirective, ButtonCheckboxDirective} from  'ng2-bootstrap/ng2-bootstrap';
import {ControlContainer,CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {RadioDirective} from '../../../directive/index';

import {CustomTextarea} from '../../tool/custome-textarea/custom-textarea';

//菜单的数据结构
class Menu{
    name:string;
    url :string;
    component:string
}


@Component({
    selector:'navbar-1-component',
    templateUrl:'app/pages/navbar/navbar1/navbar-1-component.html',
    viewProviders:[BS_VIEW_PROVIDERS],
    styleUrls:[`app/pages/navbar/navbar1/navbar-1-component.css`],
    directives:[MODAL_DIRECTIVES,CORE_DIRECTIVES,
        ROUTER_DIRECTIVES,TAB_DIRECTIVES,CustomTextarea,BUTTON_DIRECTIVES,FORM_DIRECTIVES,
        ButtonRadioDirective, ButtonCheckboxDirective,
        RadioDirective
    ],
    providers:[ControlContainer]
})
export class Navbar1Component implements OnInit{

    constructor(private el:ElementRef,private sanitizer: DomSanitizationService){}

    menu:Menu;
    showWysiwyg=false;

    @Input()
    public innerHtml;

    @Input()
    public serverPhone;

    @Input()
    public data;
    public singleModel:string = '1';

    @Input()
    public checkModel = {left: false, middle: true, right: false};

    @Input()
    public currentMenu;
    public editState = false;

    get isEdit(){
        return window['isEdit'];
    }

    get showEditView(){
        return this.editState;
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
    }




    public radioModel:string = 'Middle';
    // public checkModel:any = {left: false, middle: true, right: false};

    closeWysiwyg(){
        console.log('closeWysiswyg');
    }


    @ViewChild('childModal') public childModal: ModalDirective;
    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }



    toggleEditView(){
        //处于预览状态下不显示
        this.editState = !this.editState;
    }


    closeEditView(){
        this.editState=false;
    }

    //获取菜单列表
    get  firstMenuList(){
        return this.data.menuList;
    }


    addFirstMenu(menu){

        this.firstMenuList.push(menu);

    }

    //新增一级菜单

    addSecondaryMenu(oldMenu,name,component){
        oldMenu =JSON.parse(oldMenu);
            var menu = this.firstMenuList.find((menu)=> menu.name == oldMenu.name);
            var url = Math.round(Math.random() * 10000) + name;
            menu.secondaryMenu.push({name, component, url: url});

            //添加页面的组件
            window['pages'].push({
                "path": url,
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
        this.childModal.hide();

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