import {Component,Input} from '@angular/core';

@Component({
    selector:'toolbar',
    templateUrl:`app/init/toolbar.html`
})
export class ToolBar{
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
}