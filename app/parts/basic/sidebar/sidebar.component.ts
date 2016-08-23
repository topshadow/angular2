import {Component,OnInit,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../../app.service';
@Component({
    moduleId:module.id,
    selector:'sidebar',
    templateUrl : `./sidebar.html`,
    styleUrls:['./sidebar.css']
})
export class SideBarComponent implements OnInit{
    @Input()
    parts;
    text="文本框";

    constructor(private appService:AppService,private route:ActivatedRoute){}
    ngOnInit(){
     this.route.params.subscribe(params=>{
                var path = params['path'];
                this.parts = this.appService.getPage(path).parts;
                
        })
    }

    addInput(){
            this.parts.push({part:'input',title:'文本框'})
    }

    dragstart(){
        console.log('dragstart');
    }

}