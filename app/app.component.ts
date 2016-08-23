import {Component,OnInit} from '@angular/core';


@Component({
    selector:'my-app',
    template:`

    
    <router-outlet></router-outlet>

    `
})
export class AppComponent implements OnInit{
    title:string;
    constructor(){}
    
    ngOnInit(){
       this.title= window['nav'].title;
    }

    alertVotedResult(agree:boolean){
        alert(agree);
    }
}