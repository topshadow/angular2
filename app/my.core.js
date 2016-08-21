"use strict";
var page_component_1 = require('./init/page.component');
function myHttp(url) {
    return window['$'].ajax({ type: 'GET', url: url });
}
exports.myHttp = myHttp;
var CommonTool = (function () {
    function CommonTool() {
        this.routes = [
            {
                path: '',
                redirectTo: '/index',
                pathMatch: 'full'
            },
            {
                path: 'index',
                component: page_component_1.PageComponent
            }
        ];
    }
    return CommonTool;
}());
exports.CommonTool = CommonTool;
//# sourceMappingURL=my.core.js.map