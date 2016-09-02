/// <reference path="select.d.ts" />
import {Component, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Base} from '../../base';

@Component({
    moduleId:module.id,
    selector: 'my-select',
    templateUrl: './select.component.html'
})
export class SelectComponent extends Base {
    @Input() items: SelectItem[];
    @Input() selectedItemValue;
    selectedItemName;
    select(item) {
        this.selectedItemValue = item.value;
        this.selectedItemName = this.items.find(item=>item.value==this.selectedItemValue).name;
    }

    constructor(public router: Router) {
        super(router);
    }

}

