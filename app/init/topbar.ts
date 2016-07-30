import {Component,Input} from '@angular/core';

@Component({
    selector:'topbar',
    template:`<button (click)="editState()" >编辑</button> <button (click)="viewState()">预览</button>
 <button (click)="syncData()">同步</button><br>
            
`
})
export class TopBar{

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