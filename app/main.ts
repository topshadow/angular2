import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
var websiteData = localStorage.getItem('websiteData') ? JSON.parse(localStorage.getItem('websiteData')) : false;

if (websiteData) {
    window['websiteData'] = websiteData;
    window['nav'] = websiteData.nav;
    window['pages'] = websiteData.pages;

    platformBrowserDynamic().bootstrapModule(AppModule);
} else {
    window['$'].ajax({
        methon: 'GET',
        url: 'web-site.json',
        success: function (data) {
            window['websiteData'] = data;
            window['nav'] = data.nav;
            window['pages'] = data.pages;
            platformBrowserDynamic().bootstrapModule(AppModule);
        }
    })
}

