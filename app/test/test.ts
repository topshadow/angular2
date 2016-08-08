import {Component} from '@angular/core';

import {TestDrag,DragDropDemo,PrimeOrderList}  from './index';


@Component({
    selector:'test-app',
    template:`<test-drag></test-drag>
    <drag-drop-demo></drag-drop-demo>
    <primeng-data-table></primeng-data-table>
    <test-order-list></test-order-list>
`,
    directives:[
    TestDrag,DragDropDemo,
        PrimeOrderList
    ],
})
export class TestApp{

}