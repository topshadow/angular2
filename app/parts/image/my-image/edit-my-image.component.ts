import {Component,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'edit-my-image',
    templateUrl:'./edit-image.html'

})
export class EditMyImageComponent{
    @Input()
    myImage;
}