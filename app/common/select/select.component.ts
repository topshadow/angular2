/// <reference path="select.d.ts" />
import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Base} from '../../base';

@Component({
    moduleId: module.id,
    selector: 'my-select',
    templateUrl: './select.component.html'
})
export class SelectComponent extends Base implements OnInit {
    @Input() items: SelectItem[];
    @Input() selectedItemValue;
    selectedItemName;
    @Output() onSelected = new EventEmitter();

    ngOnInit() {
        var item = this.items.find(item => item.value == this.selectedItemValue);
        this.select(item);

    }

    select(item) {
        this.selectedItemValue = item.value;
        this.selectedItemName = item.name;
        this.onSelected.emit(item.value);
    }

    

    constructor(public router: Router) {
        super(router);
    }

}

