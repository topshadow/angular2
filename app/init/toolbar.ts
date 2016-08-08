import {Component,Input,ViewChild} from '@angular/core';

import {ModalDirective,MODAL_DIRECTIVES,BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

import {PageComponent}  from './page-component/page-component';
@Component({
    selector:'toolbar',
    templateUrl:`app/init/toolbar.html`,
    viewProviders:[BS_VIEW_PROVIDERS],
    directives:[MODAL_DIRECTIVES,PageComponent]
})
export class ToolBar{

    @ViewChild('childModal') public childModal: ModalDirective;


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
}