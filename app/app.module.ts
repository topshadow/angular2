import {NgModule,ViewContainerRef,TemplateRef} from '@angular/core';
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {Dragula,DragulaService} from 'ng2-dragula/ng2-dragula';

import {routing} from './app.routing';

import {SignInComponent,
    MyNavComponent,EditMyNavComponent,
    BannerComponent,EditBannerComponent
    ,ShowcaseComponent,EditShowCaseComponent,
    CustomComponent,TopBar,DynamicComponent,SideBarComponent,
    MyInputComponent,EditMyInputComponent,
    MyImageComponent ,EditMyImageComponent,ImageChooseComponent
} from './parts/index';
import {PageComponent} from './page.component';

import {AppService} from './app.service';

import {ResizableDirective,MyDragDirective,EditorDirective,AccordionDirective,
    HoverToolbarDirective,ClickRefershDirective,
    ClickAlertDirective,FadeInDirective
} from './directive/index';
import {MyShowDirective} from './directive/my-show';



@NgModule({
    imports:[BrowserModule,RouterModule,routing,CommonModule,FormsModule,HttpModule],
    declarations:[
    AppComponent,SignInComponent,
    MyNavComponent,EditMyNavComponent,
    BannerComponent,EditBannerComponent,
    ShowcaseComponent,EditShowCaseComponent,
    CustomComponent,TopBar,DynamicComponent,
    MyShowDirective,PageComponent,SideBarComponent,
    EditorDirective,ResizableDirective,MyDragDirective,
    AccordionDirective,MyInputComponent,HoverToolbarDirective,
<<<<<<< HEAD
    Dragula,ClickRefershDirective,ClickAlertDirective,
    FadeInDirective
=======
    EditMyInputComponent,
    Dragula,ClickRefershDirective,
    MyImageComponent,EditMyImageComponent,
    ImageChooseComponent
>>>>>>> 7bb5ef3957c84453b54036aeaaf2d5abc21f4ac5
    ],
    bootstrap:[AppComponent],
    
    providers:[AppService,ViewContainerRef,TemplateRef,DragulaService],
      
})
export class AppModule{
    public constructor(public viewContainerRef:ViewContainerRef,public templateRef:TemplateRef<any> ){
           
    }

}

