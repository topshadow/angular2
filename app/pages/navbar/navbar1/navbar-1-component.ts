import {Component,Input,ViewChild} from '@angular/core';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {ROUTER_DIRECTIVES} from  '@angular/router';
import {TAB_DIRECTIVES} from  'ng2-bootstrap/ng2-bootstrap';
import {ControlContainer} from '@angular/common';

@Component({
    selector:'navbar-1-component',
    templateUrl:'app/pages/navbar/navbar1/navbar-1-component.html',
    viewProviders:[BS_VIEW_PROVIDERS],
    styleUrls:[`app/pages/navbar/navbar1/navbar-1-component.css`],
    directives:[MODAL_DIRECTIVES,ROUTER_DIRECTIVES,TAB_DIRECTIVES],
    providers:[ControlContainer]
})
export class Navbar1Component{
    @Input()
    public data;
    public singleModel:string = '1';
    @Input()
    public radioModel:string = 'Middle';
    @Input()
    public checkModel = {left: false, middle: true, right: false};

    @Input()
    public currentMenu;
    public editState = false;

    @ViewChild('childModal') public childModal: ModalDirective;
    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }

    get isEdit(){
        return window['isEdit'];
    }

    toggleEditView(){
        //处于预览状态下不显示
        this.editState = !this.editState;
    }

    get showEditView(){
        return this.editState;
    }

    closeEditView(){
        this.editState=false;
    }

    //获取菜单列表
    get  firstMenuList(){
        return this.data.menuList;
    }

    //新增一级菜单

    addMenu(oldMenu,name,component){
        oldMenu =JSON.parse(oldMenu);

        if(!oldMenu){

        }else {

            console.log(oldMenu);
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
            this.hideChildModal();
        }
    }

    uploadImage(target) {
        var reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        var data = this.data;
    }

}