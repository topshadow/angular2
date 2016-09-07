import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from '../../base';


@Directive({
    selector: '[hover-color]'
})
export class HoverColorDirective extends Base implements OnInit {
    @Input() part: Part;

    static HoverColorProperty = ['hoverBackgroundColor', 'hoverColor', 'hoverBorderColor'];

    constructor(public router: Router, public el: ElementRef) { super(router) }


    ngOnInit() {
        for (var property in HoverColorDirective.HoverColorProperty) {
            if (Reflect.has(this.part, property)) {
                this.cssStyleNameFix({ cssKey: property, cssValue: this.part[property] })
            }
        }

    }

    cssStyleNameFix(cssKeyValuePair: CssKeyValuePair) {
        switch (cssKeyValuePair.cssKey) {
            case "hoverBackgroundColor":
                cssKeyValuePair.cssKey = "background-color"
                this.hoverCssStyle(cssKeyValuePair);
                break;
            case "hoverColor":
                cssKeyValuePair.cssKey = "color";
                this.cssStyleNameFix(cssKeyValuePair)
                break;
            case "hoverBorderColor":
                cssKeyValuePair.cssKey = "border-color";
                this.cssStyleNameFix(cssKeyValuePair);
                break;
            default:
                this.cssStyleNameFix(cssKeyValuePair);
                break;
        }
    }
    hoverCssStyle(cssKeyValuePair: CssKeyValuePair) {
        var $el = this.$(this.el.nativeElement);
        $el.hover(() => $el.css(cssKeyValuePair.cssKey, cssKeyValuePair.cssValue), $el.css(cssKeyValuePair.cssKey, this.part.color))
    }

}