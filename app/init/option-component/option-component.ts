import {Component} from '@angular/core';

import  {Draggable,Droppable,DataTable}  from 'primeng/primeng'

import {ComponentType,OPTIONCOMPONENTS}  from './component-type';

@Component({
    selector:'option-component',
    templateUrl:`app/init/option-component/option-component.html`,
    directives:[Draggable,Droppable,DataTable]
})
export class OptionComponent{
    optionComponents:ComponentType[]=OPTIONCOMPONENTS;

}

