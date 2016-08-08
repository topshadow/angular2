import {Component} from '@angular/core';

import {Dragula,DragulaService} from 'ng2-dragula/ng2-dragula';


@Component({
    selector:`draula-sample`,
    templateUrl:`app/test/dragula/sample.html`,
    directives:[Dragula],
    viewProviders:[DragulaService]
})
export class DragulaSample{

    items=['a','b','c','d'];
    items2=['a','b','c','d'];


    constructor(private dragulaService:DragulaService){
               dragulaService.setOptions('third-bag', {
                    removeOnSpill: true
               });
    }
}