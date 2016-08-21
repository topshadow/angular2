import {Component,OnInit,Input} from '@angular/core';


@Component({
    selector:'showcase',
    templateUrl:'app/parts/basic/showcase/showcase.html'
})
export class ShowcaseComponent implements OnInit{
    @Input()
    showcase;
    ngOnInit(){}
}

