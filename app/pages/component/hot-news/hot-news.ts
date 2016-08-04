import {Component,Input} from '@angular/core';

@Component({
    selector:'hot-news',
    templateUrl:`app/pages/component/hot-news/hot-news.html`,
    styleUrls:[`app/pages/component/hot-news/hot-news.css`]
})

export class HotNews{
    @Input()
    data;
}