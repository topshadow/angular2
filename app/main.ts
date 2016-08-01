import {bootstrap} from '@angular/platform-browser-dynamic';
import {CommonFunc} from './core';
import  {App} from './app'
import {provideRouter} from '@angular/router';




var common =new CommonFunc();
common.getJSON('website-data.json').then(data=> {
    window['websiteData']=data;
    window['route']  =common.parsePagesToRoute(data['pages']);
    window['pages'] = data['pages'];
    window['isEdit'] =true;
    bootstrap(App,[ [provideRouter(window['route'])]  ])
        .catch(err => console.error(err));
});


