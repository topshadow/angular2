"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./parts/index');
var page_component_1 = require('./page.component');
var appRoutes = [
    {
        path: "",
        redirectTo: "/sign-in",
        pathMatch: 'full'
    },
    {
        path: "sign-in",
        component: index_1.SignInComponent
    }, {
        path: "sign-up",
        component: index_1.SignUpComponent
    },
    {
        path: ':path',
        component: page_component_1.PageComponent,
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map