import {Component} from '@angular/core';

import {TestDrag,DragDropDemo,PrimeOrderList,DragulaSample}  from './index';


@Component({
    selector:'test-app',
    template:`<test-drag></test-drag>
    <drag-drop-demo></drag-drop-demo>
    <primeng-data-table></primeng-data-table>
    <test-order-list></test-order-list>
    <draula-sample></draula-sample>
`,
    directives:[
    TestDrag,DragDropDemo,
        PrimeOrderList,
        DragulaSample
    ],
})
export class TestApp{

}