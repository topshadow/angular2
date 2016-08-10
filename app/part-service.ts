import {Injectable} from '@angular/core';

export interface Part{
    name:string;
    component:string;
}

export interface OptionGroup{
    groupName:string;
    groupParts:Part[];
}

@Injectable()
export class PartService{


    getStaticOptionGroups():OptionGroup[]{
        return  [{
            groupName:'基础',
            groupParts:[{
                name:'图文展示',
                component:'Banner1Component'
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
                }]
        },{
            groupName:'排版',
            groupParts:[{
                name:'图文展示',
                component:'Banner1Component'
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
                }]
        },
            {
                groupName:'产品',
                groupParts:[{
                    name:'图文展示',
                    component:'Banner1Component'
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
                    }]
            },
            {
                groupName:'互动',
                groupParts:[{
                    name:'图文展示',
                    component:'Banner1Component'
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
                    }]
            },
            {
                groupName:'高级',
                groupParts:[{
                    name:'图文展示',
                    component:'Banner1Component'
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
                    }]
            },
        ];
    }

    getCurrentPageParts(currentPath:string){
        var currentPage = window['pages'].find(page=>page.path==currentPath);
        console.log(currentPage);
        return currentPage.components;

    }

}