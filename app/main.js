"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var websiteData = localStorage.getItem('websiteData') ? JSON.parse(localStorage.getItem('websiteData')) : false;
if (websiteData) {
    window['websiteData'] = websiteData;
    window['nav'] = websiteData.nav;
    window['pages'] = websiteData.pages;
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}
else {
    window['$'].ajax({
        url: 'web-site.json',
        method: "GET",
        success: function (data) {
            window['websiteData'] = data;
            window['nav'] = data.nav;
            window['pages'] = data.pages;
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    });
}
//# sourceMappingURL=main.js.map