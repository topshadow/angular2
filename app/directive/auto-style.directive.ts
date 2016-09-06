import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../base';

var PartStyleProperty = ["height", "width", "left",
    "top",
    
    "color",
    "backgroundColor"];


@Directive({
    selector: '[auto-style]'
})
export class AutoStyleDirective extends Base implements OnInit {
    @Input() part: Part;
    constructor(public router: Router, public el: ElementRef) {
        super(router);
    }

    ngOnInit() {
        this.initElementStyle();
    }

    initElementStyle() {
        for (var property of PartStyleProperty) {
            if (this.part[property]) {
                this.cssStyle({ cssName: property, cssValue: this.part[property] });
            }
        }


    }

    cssNameFix(style: { cssName: string, cssValue: any }) {
        switch (style.cssName) {
            case "backgroundColor":
                style.cssValue = "background-color";
                this.cssStyle(style);
                break;
                
            default:
                this.cssStyle(style);
                break;
        }
    }

    cssStyle(style: { cssName: string, cssValue: any }) {
        this.$(this.el.nativeElement).css(style.cssName,style.cssValue);
    }


}