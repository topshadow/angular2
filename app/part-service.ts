import {Injectable} from '@angular/core';

@Injectable()
export class PartService{


    getStaticOptionParts(){
        return [
            {
                "component":"Banner1Component",
                "name":"产品展示"
            },
            {
                "component":"ProductList",
                "name":"产品列表"
            },
            {
                "component":"ServiceContent",
                "name":"服务内容"
            },
            {
                "component":"ArticleShow",
                "name":"文章列表"
            },
            {
                "component":"HotNews",
                "name":"热点新闻"
            }
        ]
    }

    getCurrentPageParts(currentPath:string){
        var currentPage = window['pages'].find(page=>page.path==currentPath);
        console.log(currentPage);
        return currentPage.components;

    }

}