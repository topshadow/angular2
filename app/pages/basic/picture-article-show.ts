import {Component,OnInit,Input,ElementRef} from '@angular/core';
import {DomSanitizationService} from '@angular/platform-browser';

import {Base} from '../../base';

import {PictureArticleShowService} from './picture-article-show.service';
import {PictureArticle} from './picture-article';


import {Editor} from 'primeng/primeng';
import {Header} from 'primeng/primeng';



var html =`app/pages/basic/picture-article-show.html`;
var html2 = 'app/pages/basic/picture-article-show2.html';
@Component({
    selector:'picture-article-show',
    templateUrl:html,
    styleUrls:[`app/pages/basic/picture-article-show.css`],
    directives:[Editor,Header],
    providers:[PictureArticleShowService]
})
export class PictureArticleShow extends Base implements OnInit  {

    @Input()
    data;

    text:string;

    pictureArticle:PictureArticle=this.pictureArticleService.getStaticArticlePicture();


    ngOnInit(){
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
    }

        constructor(private el:ElementRef,private pictureArticleService:PictureArticleShowService,private sanitizer:DomSanitizationService){
        super();
            // templateRef.createEmbeddedView()
        this.pictureArticle.article = sanitizer.bypassSecurityTrustHtml(this.pictureArticle.article);
    }
    saveArticle(article:string){
        this.pictureArticle.article=article;
        console.log(window['markdown']);
         var markdownValue= window['markdown'].toHTML( this.pictureArticle.article);
        console.log(markdownValue);
    }

    clickToDeletePicture(){
        this.pictureArticleService.deletePicture();
    }

   public getContent(){
        alert(window['editor'].getContent());
    }

    use(){
        this.pictureArticle.article=window['editor'].getContent();
        // window['editor'].render('#testRender');
    }
    toggleStyle(){
        html='app/pages/basic/picture-article-show2.html';
        console.log(html);

    }

}
