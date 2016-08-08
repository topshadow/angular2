import {Component} from '@angular/core';

import  {}  from 'primeng/primeng'

import {ComponentType,OPTIONCOMPONENTS}  from './component-type';

@Component({
    selector:'option-component',
    templateUrl:`app/init/option-component/option-component.html`
})
export class OptionComponent{
    optionComponents:ComponentType[]=OPTIONCOMPONENTS;

}

