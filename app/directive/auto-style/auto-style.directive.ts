import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../base';



@Directive({
    selector: '[auto-style]'
})
export class AutoStyleDirective extends Base implements OnInit {
    /**
     * 自动注入样式,
     * 以下是样式
     */
    static PartStyleProperty = ["height", "width", "left", "top", "color", "backgroundColor"];

    @Input() part: Part;
    constructor(public router: Router, public el: ElementRef) {
        super(router);
    }

    ngOnInit() {
        this.initElementStyle();
    }

    initElementStyle() {
        for (var property of AutoStyleDirective.PartStyleProperty) {
            if (Reflect.has(this.part,property)){
                this.cssStyle({ cssName: property, cssValue: this.part[property] });
            }
        }
    }

    //css样式属性名修正
    cssNameFix(style: { cssName: string, cssValue: any }) {
        switch (style.cssName) {
            case "backgroundColor":
                style.cssName = "background-color";
                this.cssStyle(style);
                break;
            case "borderColor":
                style.cssName="border-color";
                this.cssStyle(style);
                break;
            default:
                this.cssStyle(style);
                break;
        }
    }

    cssStyle(style: { cssName: string, cssValue: any }) {
        this.$(this.el.nativeElement).css(style.cssName, style.cssValue);
    }


}