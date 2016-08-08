import {Component,Input,ViewChild,ElementRef,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ModalDirective,MODAL_DIRECTIVES,BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';




interface PageComponent{
    component:string;
    name:string;
    componentType:string;
}

@Component({
    selector:'toolbar',
    templateUrl:`app/init/toolbar.html`,
    viewProviders:[BS_VIEW_PROVIDERS],
    directives:[MODAL_DIRECTIVES],
    styleUrls:['app/init/toolbar.css']
})
export class ToolBar implements  OnInit{
    pageComponents:PageComponent[];


    @ViewChild('childModal') public childModal: ModalDirective;

    constructor(private el:ElementRef,private router:Router){}


    ngOnInit(){
        var currentPath =  this.router.url.replace('/','');
        console.log('current page route path:',currentPath);
        var currentPage = window['pages'].find(page=>page.path==currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
    }

    @Input()
    public data;

    syncData(){
    localStorage.setItem('websiteData',JSON.stringify(window['websiteData']));
    }

    editState(){
        window['isEdit'] = true;
    }
    viewState(){
        window['isEdit'] = false;
    }

    clearData(){
        localStorage.setItem('websiteData','');
    }


    toggleOptionComponent(){
        window['$'](this.el.nativeElement).find('#optionPageComponent').toggleClass('hide');
    }

}