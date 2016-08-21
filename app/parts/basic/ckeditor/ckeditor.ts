import {Component} from '@angular/core';


@Component({
    selector: 'sample',
    directives: [],
    template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#99000'}"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    debounce="500">
  </ckeditor>
  `
})
export class Sample {
    ckeditorContent: string;
    constructor() {
        this.ckeditorContent = `<p>My HTML</p>`;
    }
}