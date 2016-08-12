import {Component} from '@angular/core';

import {TestDrag,DragDropDemo,PrimeOrderList,DragulaSample,ClassSelected}  from './index';


@Component({
    selector:'test-app',
    template:`
<class-selected></class-selected>
<test-drag></test-drag>
    <drag-drop-demo></drag-drop-demo>
    <primeng-data-table></primeng-data-table>
    <test-order-list></test-order-list>
    <dragula-sample></dragula-sample>
`,
    directives:[
        ClassSelected,
    TestDrag,DragDropDemo,
        PrimeOrderList,
        DragulaSample
    ],
})
export class TestApp{

}