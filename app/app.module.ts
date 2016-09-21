import {NgModule, ViewContainerRef, TemplateRef} from '@angular/core';
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {routing} from './app.routing';

import {SignInComponent,
    MyNavComponent, 
    BannerComponent, EditBannerComponent
    , ShowcaseComponent, EditShowCaseComponent,
    CustomComponent, TopBar, DynamicComponent, SideBarComponent,
    MyInputComponent,MyImageComponent,RectangleComponent,
    MyButtonComponent,MyIconComponent,ShapeComponent,CarouselComponent,
    MyImagePanelComponent,MyIconPanelComponent,MyButtonPanelComponent,MyInputPanelComponent,ContainerPanelComponent,ShapePanelComponent,CarouselPanelComponent

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
        MyNavComponent,
        BannerComponent, EditBannerComponent,
        ShowcaseComponent, EditShowCaseComponent,
        CustomComponent, TopBar, DynamicComponent,
         PageComponent, SideBarComponent,
        EditorDirective, ResizableDirective, MyDragDirective,
        AccordionDirective, MyInputComponent, HoverToolbarDirective,
        RectangleComponent,
        FadeInDirective,
        MyButtonComponent,CarouselComponent,
        AutoStyleDirective,
MyImageComponent,RotatableDirective,
        CommonDirectives,MyIconComponent,ClickToolbarDirective,ShapeComponent,
        MyImagePanelComponent,MyIconPanelComponent,MyButtonPanelComponent,MyInputPanelComponent,ContainerPanelComponent,ShapePanelComponent,CarouselPanelComponent
    
    ],
    bootstrap: [AppComponent],

    providers: [AppService, ViewContainerRef, TemplateRef],

})
export class AppModule {
    public constructor(public viewContainerRef: ViewContainerRef, public templateRef: TemplateRef<any>) {

    }

}

