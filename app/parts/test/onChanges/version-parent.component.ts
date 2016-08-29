/**
 * 父子组件通过生命周期函数ogOnchanges()来互动的
 */

import {Component, OnChanges} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'version-parent',
    templateUrl: './version-parent.html'
})
export class VersionParentComponent {
    major: number = 1;
    minor: number = 23;


    addNewMinor(){
        this.minor++;
    }   
    addNewMajor(){
        this.major++;
        this.minor=0;
    }

}