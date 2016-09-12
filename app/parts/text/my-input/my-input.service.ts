import {Injectable} from '@angular/core';
import {AppService} from '../../../app.service';

@Injectable()
export class MyInputService {
    constructor(public appService: AppService) {

    }

    addH1Input(path) {
        var newInput=this.newInput;
        newInput.type="h1";
        this.appService.addPart(path,newInput);
    }

    addH2Input(path){
        var newInput =this.newInput;
        newInput.type="h2";
        this.appService.addPart(path,newInput);
    }
    addH3Input(path){
        var newInput =this.newInput;
        newInput.type="h3";
        this.appService.addPart(path,newInput);     
    }

    addH4Input(path){
        var newInput= this.newInput;
        newInput.type="h4";
        this.appService.addPart(path,newInput);
    }




    get newInput() {
        return {
            "part": "input",
            "title": "文本框",
            "type": "h1",
            "innerHTML": "text",
            "color": "black",
            "backgroundColor": "white",
            "animates": [],
            "left": "50%",
            "top": "200px",
            "position": "absolute",
            "width": "300px",
            "height": "60px"
        }
    }
}