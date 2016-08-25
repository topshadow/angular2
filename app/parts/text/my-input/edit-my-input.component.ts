import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'edit-my-input',
    templateUrl:'./edit-my-input.html'
})
export class EditMyInputComponent{
    @Input()
    myInput;

    @Input()
    editTextareaId;

    getBody(){
        console.log(this.editTextareaId);
        alert(window['tinymce'].get(this.editTextareaId).getBody().innerHTML);
    }

}