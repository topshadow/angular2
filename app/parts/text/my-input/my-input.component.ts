/// <reference path="./my-input.d.ts" />
import {Component, Input, OnInit, HostListener, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../app.service';
import {Base} from '../../../base';
import {} from '../'

@Component({
    moduleId: module.id,
    selector: 'my-input',
    templateUrl: `./my-input.html`
})
export class MyInputComponent extends Base implements OnInit {
    @Input()
    public myInput;
    animates;
    optionAnimates = {
        touchEvents: [{ name: "元素出现", value: "display" },
            { name: "元素点击", value: 'click' },
            { name: "鼠标悬浮", value: 'mouse-hover' }],
        animates: [{ name: "无效果", value: "none" },
            { name: "弹出", value: "popup" }
        ]
    };
    constructor(private appService: AppService, public router: Router, public el: ElementRef) { super(router); }

    ngOnInit() {
        console.log(this.myInput);
        this.animates = this.myInput.animates;
    }

    changePostion(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myInput);
        this.myInput.left = left;
        this.myInput.top = top;
        this.myInput.position = position;
    }


    dragStart(e) {
        console.log(e);
    }

    resizeStop(e) {
        this.myInput.width = e.target.style.width;
        this.myInput.height = e.target.style.height;
    }

    upZIndex() {
        this.myInput.zIndex++;
    }

    downZIndex() {
        this.myInput.zIndex--;
    }

    TopZIndex() {
        this.myInput.zIndex = 9999;
    }
    bottomZIndex() {
        this.myInput.zIndex = 0;
    }
    deleteMe() {
        this.appService.deletePart(this.path, this.myInput);
    }

    addAnimate() {
        this.myInput.animates.push({
            touchEvent: 'click',
            type: 'center-big',
            time: 1,
            times: 1,
            delayeTime: 1
        });
    }

    playAnimates() { }

    playAniamte(animate: Animate) {
        switch (animate.type) {
            case "center-big":
            // this
        }
    }

}
