import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter} from '@angular/router';

import {CommonFunc} from './core';
import  {App} from './app'


var common =new CommonFunc();




var websiteData = localStorage.getItem('websiteData');
var startApp = function(data){
    window['websiteData']=data;
    window['route']  =common.parsePagesToRoute(data['pages']);
    window['pages'] = data['pages'];
    window['isEdit'] =true;
    bootstrap(App,[ [provideRouter(window['route'])]  ])
        .catch(err => console.error(err));
};





if(websiteData){
startApp(JSON.parse(websiteData));
}else{
    common.getJSON('website-data.json').then(startApp);
}



