import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: "base",
    template: ''
})
export class Base {
    constructor(public router: Router) {
        this.arrayProtoType();
    }

    arrayProtoType() {
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };
    }


    get isEdit() {
        return window['isEdit']
    }

    get $() {
        return window['$'];
    }

    get path() {
        return this.router.url.indexOf('?') == -1?    
        this.router.url.slice(this.router.url.indexOf('/') + 1):
        this.router.url.slice(this.router.url.indexOf('/'), this.router.url.indexOf('?'));
        }

}

