import {Component,Input} from '@angular/core';

@Component({
    selector:'toolbar',
    templateUrl:`app/init/toolbar.html`
})
export class ToolBar{
    @Input()
    public data;

    syncData(){
        console.log('同步数据');
    }

    editState(){
        window['isEdit'] = true;
    }
    viewState(){
        window['isEdit'] = false;
    }
}