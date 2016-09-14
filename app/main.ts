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
        url: 'web-site.json',
        method:"GET",
        success: function (data): void {
            console.log(data);
            window['websiteData'] = data;
            window['nav'] = data.nav;
            window['pages'] = data.pages;
            platformBrowserDynamic().bootstrapModule(AppModule);
        }
    })
}

