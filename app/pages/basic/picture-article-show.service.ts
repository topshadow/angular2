import {Injectable} from '@angular/core';
import {PictureArticle} from './picture-article';


@Injectable()
export  class PictureArticleShowService{
    pictureArticle:PictureArticle;

    setPictureArticle(pictureArticle:PictureArticle){
        this.pictureArticle =pictureArticle;
    }

    getPictureArticle(){
        return this.pictureArticle;
    }

    deletePicture(){
    this.pictureArticle.pictures=[];
    }

    getStaticArticlePicture(){
        return {
            article:'this is picture article',
            pictures:[]
        };
    }

}