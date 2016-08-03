import {Component,Input} from '@angular/core';


@Component({
 selector:'product-list',
    templateUrl:`app/pages/component/product-list/product-list.html`
})
export class ProductList{
    @Input()
    data;
}
