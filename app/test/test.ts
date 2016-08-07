import {Component} from '@angular/core';

import {TestDrag}  from './index';
@Component({
    selector:'test-app',
    template:`<test-drag></test-drag>`,
    directives:[
    TestDrag
    ],
})
export class TestApp{

}