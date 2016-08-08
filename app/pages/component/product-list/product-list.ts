import {Component,Input} from '@angular/core';


@Component({
 selector:'product-list',
    templateUrl:`app/pages/component/product-list/product-list.html`,
    styleUrls:[`app/pages/component/product-list/product-list.css`]
})
export class ProductList{
    @Input()
    data;
}
