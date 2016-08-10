import {Component,OnInit,ElementRef} from '@angular/core';

import {Base} from '../../base';

import {PictureArticleShowService} from './picture-article-show.service';

import {PictureArticle} from  './picture-article';

@Component({
    selector:`edit-picture-article-show`,
    templateUrl:`app/pages/basic/edit-picture-article-show.html`,
    providers:[PictureArticleShowService]
})
export class EditPictureArticleShow extends Base implements OnInit {
    pictureArticle:PictureArticle;


    ngOnInit() {
        window['$'](this.el.nativeElement).find('#articleEdit')
            .wysihtml5({
                "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
                "emphasis": true, //Italics, bold, etc. Default true
                "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                "html": false, //Button which allows you to edit the generated HTML. Default false
                "link": true, //Button to insert a link. Default true
                //Button to insert an image. Default true,
                "color": true, //Button to change color of font
                "blockquote": true, //Blockquote
                "size": "24px" //default: none, other options are xs, sm, lg
            });
        this.pictureArticle=this.pictureArticleShowService.getPictureArticle();
    }

    constructor(private pictureArticleShowService:PictureArticleShowService,private el:ElementRef){super();}





}

