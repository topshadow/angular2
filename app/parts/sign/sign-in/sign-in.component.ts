import {Component,DynamicComponentLoader,Injector} from '@angular/core';
import {ChildComponent} from './child';

@Component({
    moduleId:module.id,
    selector:'sign-in',
    templateUrl:'./sign-in.html',
    viewProviders: [] 
})
export class SignInComponent{
    constructor(private loader:DynamicComponentLoader,injector:Injector){
            loader.loadAsRoot(ChildComponent, '#child', injector);
    }


}

