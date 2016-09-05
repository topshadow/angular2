import {Directive,Input,OnInit} from  '@angular/core';

interface ChangeColor{
    borderColor:string;
    backgroundColor:string;
    color:string;
}

@Directive({
    selector:'[hover-color]'
})
export class HoverColorDirective implements OnInit{
        @Input() changeColors:ChangeColor;

        constructor(){}
        ngOnInit(){
            console.log('hover color');
        }

}