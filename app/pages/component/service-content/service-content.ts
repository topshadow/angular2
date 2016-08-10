import {Component,Input , ViewChild} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS,ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector:`service-content`,
    templateUrl:`app/pages/component/service-content/service-content.html`,
    styleUrls:['app/pages/component/service-content/service-content.css'],
    directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
})
export class  ServiceContent{
    @Input()
    data

    get isEdit(){
        return window['isEdit'];
    }

    @ViewChild('childModal') public childModal: ModalDirective;

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
}