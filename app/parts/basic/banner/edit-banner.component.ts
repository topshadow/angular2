import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../../app.service';

@Component({
    moduleId: module.id,
    selector: 'edit-banner',
    templateUrl: './edit-banner.html'
})
export class EditBannerComponent {
    @Input()
    banner;

    optionBannerImage= [
        {
            src: "images/banner2.png"
        },
        {
            src: "http://10500322.s21i-10.faiusr.com/2/ABUIABACGAAg3sWuuwUo4620pgIwgA84vAU.jpg"
        },
        {
            src: "images/CMS_06.png"
        }
        
    ]

    constructor(private router: Router,private appService:AppService) { }

    addBanner(image: string) {
        this.banner.images.push(image);
    }

    deleteImage(image: string) {
        var index = this.banner.images.indexOf(image);
        var before = this.banner.images.slice(0, index);
        var after = this.banner.images.slice(index + 1);
        this.banner.images = before.concat(after);

    }


    deleteThisComponent() {
        this.banner=null;
    }


}