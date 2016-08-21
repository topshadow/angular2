import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'edit-showcase',
    templateUrl:'./edit-showcase.html'
})
export class EditShowCaseComponent{

    @Input()
    showcase;

    constructor(){
        console.log('edit-showcase init')
    }

}