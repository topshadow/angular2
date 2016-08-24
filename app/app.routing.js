"use strict";
const router_1 = require('@angular/router');
const index_1 = require('./parts/index');
const page_component_1 = require('./page.component');
const appRoutes = [
    {
        path: "",
        redirectTo: "/index",
        pathMatch: 'full'
    },
    {
        path: "sign-in",
        component: index_1.SignInComponent
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