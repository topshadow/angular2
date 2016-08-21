import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

import {CommonTool,myHttp}  from './my.core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
//import {routing} from './app.routing';


function parsePageDatatoRoute(pages){

			let routes:Routes[]=[];
	    routes.push(
                {
                    path:'',
                    redirect:'/index'
                    component:PageComponent
                }
            );
   
        return routes;
   }





 function start(websiteData){
 console.log(websiteData);
	window['websiteData'] = websiteData;
	window['pages'] = websiteData.pages;
	window['nav'] = websiteData.nav;
	window['foot'] = websiteData.foot;/	platformBrowserDynamic().bootstrapModule(AppModule);
}


@NgModule({
  imports:      [ BrowserModule,
  FormsModule,HttpModule,
  RouterModule 
  
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


 }



myHttp('web-site.json').success(start);

