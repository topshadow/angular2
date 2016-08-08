import {Component} from '@angular/core';
import {Dragula,DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'test-drag',
    directives: [Dragula],
    viewProviders: [DragulaService],
    template:`
  <div><h1>左边的</h1> 
  <div class="" [dragula]="'left'" ></div>
  
  </div>
  <div><h1>右边的</h1>
  <div  [dragula]="'right'">
   <li *ngFor="let item of items" [dragula]='"bag-one"' [dragulaModel]='items'>
   {{item}}
</li>
</div>
  </div>
  
  `,
    styleUrls:['app/test/dragula/drag.css']
})
export class TestDrag {
    items=['a','b'];
    constructor(private dragService:DragulaService) {
        dragService.setOptions('third-bag', {
            removeOnSpill: true
        });
    }

}