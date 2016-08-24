import {NgModule,ViewContainerRef} from '@angular/core';
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {routing} from './app.routing';
import {SignInComponent,
    MyNavComponent,EditMyNavComponent,
    BannerComponent,EditBannerComponent
    ,ShowcaseComponent,EditShowCaseComponent,
    CustomComponent,TopBar,DynamicComponent,SideBarComponent,MyInputComponent
} from './parts/index';
import {PageComponent} from './page.component';

import {AppService} from './app.service';

import {ResizableDirective,MyDragDirective,EditorDirective,AccordionDirective,
    HoverToolbarDirective
    
} from './directive/index';
import {MyShowDirective} from './directive/my-show';


@NgModule({
    imports:[BrowserModule,RouterModule,routing,CommonModule,FormsModule],
    declarations:[
    AppComponent,SignInComponent,
    MyNavComponent,EditMyNavComponent,
    BannerComponent,EditBannerComponent,
    ShowcaseComponent,EditShowCaseComponent,
    CustomComponent,TopBar,DynamicComponent,
    MyShowDirective,PageComponent,SideBarComponent,
    EditorDirective,ResizableDirective,MyDragDirective,
    AccordionDirective,MyInputComponent,HoverToolbarDirective
    ],
    bootstrap:[AppComponent],
    
    providers:[AppService,ViewContainerRef],
      
})
export class AppModule{
    public constructor(viewContainerRef:ViewContainerRef){
           
    }

}

