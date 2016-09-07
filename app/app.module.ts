import {NgModule, ViewContainerRef, TemplateRef} from '@angular/core';
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

import {routing} from './app.routing';

import {SignInComponent,
    MyNavComponent, EditMyNavComponent,
    BannerComponent, EditBannerComponent
    , ShowcaseComponent, EditShowCaseComponent,
    CustomComponent, TopBar, DynamicComponent, SideBarComponent,
    MyInputComponent,MyImageComponent,
    MyButtonComponent,MyIconComponent
} from './parts/index';
import {PageComponent} from './page.component';
import CommonDirectives from './common/index';

import {AppService} from './app.service';

import {ResizableDirective, MyDragDirective, EditorDirective, AccordionDirective,
    HoverToolbarDirective,AutoStyleDirective, FadeInDirective,RotatableDirective,ClickToolbarDirective
} from './directive/index';




@NgModule({
    imports: [BrowserModule, RouterModule, routing, CommonModule, FormsModule, HttpModule],
    declarations: [
        AppComponent, SignInComponent,
        MyNavComponent, EditMyNavComponent,
        BannerComponent, EditBannerComponent,
        ShowcaseComponent, EditShowCaseComponent,
        CustomComponent, TopBar, DynamicComponent,
         PageComponent, SideBarComponent,
        EditorDirective, ResizableDirective, MyDragDirective,
        AccordionDirective, MyInputComponent, HoverToolbarDirective,
        Dragula, 
        FadeInDirective,
        MyButtonComponent,
        Dragula,AutoStyleDirective,
MyImageComponent,RotatableDirective,
        CommonDirectives,MyIconComponent,ClickToolbarDirective
    ],
    bootstrap: [AppComponent],

    providers: [AppService, ViewContainerRef, TemplateRef, DragulaService],

})
export class AppModule {
    public constructor(public viewContainerRef: ViewContainerRef, public templateRef: TemplateRef<any>) {

    }

}

