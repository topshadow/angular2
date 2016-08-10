import {Component,OnInit,Input,ElementRef} from '@angular/core';


import {Base} from '../../base';

import {PictureArticleShowService} from './picture-article-show.service';
import {EditPictureArticleShow}  from './edit-picture-article-show';

@Component({
    selector:'picture-article-show',
    templateUrl:`app/pages/basic/picture-article-show.html`,
    styleUrls:[`app/pages/basic/picture-article-show.css`],
    directives:[EditPictureArticleShow],
    providers:[PictureArticleShowService]
})
export class PictureArticleShow extends Base implements OnInit  {

    @Input()
    data;

    isShowOptionPanel:boolean=false;

     text:string='<h1>a</h1>';
    ngOnInit(){
        this.pictureArticleService.setPictureArticle(this.data);
    }

    constructor(private el:ElementRef,private pictureArticleService:PictureArticleShowService){
        super();
        window['$'](el).find('#test').css('background-color','blue');
    }

    clickToDeletePicture(){
        this.pictureArticleService.deletePicture();
    }

}