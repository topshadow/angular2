import {Injectable} from '@angular/core';
import {AppService} from '../../../app.service';

@Injectable()
export class MyButtonService {
    constructor(public appService: AppService) { }

    addInfo1Button(path: string) {
        var newButton = this.newButton;
        newButton.class="btn btn-info";
        this.appService.addPart(path, newButton)
    }

    addInfo2Button(path: string) {
        var newButton = this.newButton;
        newButton.class="button1";
        this.appService.addPart(path, newButton);
    }

    addSuccessButton(path:string){
        var newButton = this.newButton;
        newButton.class="btn btn-success";
        newButton.borderRadius=15;
        this.appService.addPart(path,newButton);
        
    }

    addPrimaryButton(path){
        var newButton = this.newButton;
        newButton.class="btn btn-primary";
        this.appService.addPart(path,newButton);
    }

    addWarningButton(path){
        var newButton = this.newButton;
        newButton.class="btn btn-warning";
        this.appService.addPart(path,newButton);
    }

    addDangerButton(path){
        var newButton = this.newButton;
        newButton.class="btn btn-danger";
        this.appService.addPart(path,newButton);
    }


    get newButton() {
        return {
            "part": "my-button",
            "left": "50%",
            "top": "300px",
            "class":"",
            "width": "100px",
            "height": "60px",
            "style": "style1",
            "text": "按钮",
            "position": "relative",
            "color": "black",
            "backgroundColor": "white",
            "link": "",
            "useNewFrameOpen": false,
            "borderColor": "",
            "borderRadius": 0,
            "borderWidth": 0,
            "hoverBackgroundColor": "",
            "hoverColor": "",
            "hoverBorderColor": ""
        }
    }
}