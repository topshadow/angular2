/// <reference path="./my-input.d.ts" />
import {Component, Input, OnInit, HostListener, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../app.service';
import {Base} from '../../../base';



@Component({
    moduleId: module.id,
    selector: 'my-input',
    templateUrl: `./my-input.html`,
    viewProviders: []
})
export class MyInputComponent extends Base implements OnInit {
    @Input() myInput: MyInput;
    animates;
    optionAnimates = {
        touchEvents: [{ name: "元素出现", value: "display" },
            { name: "元素点击", value: 'click' },
            { name: "鼠标悬浮", value: 'mouse-hover' }],
        types: [{ name: "无效果", value: "none" },
            { name: "弹出", value: "popup" },
            { name: "中心放大", value: "center-big" }
        ]
    };
    constructor(private appService: AppService, public router: Router, public el: ElementRef) {
        super(router);
    }

    ngOnInit() {
        window['tinymce'].init({
            selector: '.tinymceMyInput', // change this value according to your HTML
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste imagetools"
            ],
            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
            content_css: [
                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                '//www.tinymce.com/css/codepen.min.css'
            ],
            a_plugin_option: true,
            a_configuration_option: 400
        });

        $(document).on('focusin', function (e) {
            if ($(e.target).closest(".mce-window").length) {
                e.stopImmediatePropagation();
            }
        });
        // console.log(this.myInput);
        this.animates = this.myInput.animates;
        console.log('my input innerHTML:', this.myInput.innerHTML);
        var el = this.$(this.el.nativeElement).find('#myInput').html(this.myInput.innerHTML);
        console.log(el);

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


    upZIndex() {
        if(!this.myInput.zIndex){
            this.myInput.zIndex=0;
        }
         this.myInput.zIndex++; }

    downZIndex() {
        if(!this.myInput.zIndex){
            this.myInput.zIndex=0;
        }
         this.myInput.zIndex--; }

    topZIndex(){
        this.myInput.zIndex=10;
    }
    bottomZIndex(){
        this.myInput.zIndex=0;
    }

    addAnimate() { }

    useAnimates() {
        for (var animate of this.animates) {
            this.useAnimate(animate);
        }
    }

    useAnimate(animate: Animate) {
        var oldEventObj = animate.eventObj;
        switch (animate.touchEvent) {
            case "click":
                this.$(this.el.nativeElement).find('.myInput').click(() => { this.playAniamte(animate) });
                break;
            case "display":
                this.playAniamte(animate);
                break;
            case "mouse-hover":
                this.$(this.el.nativeElement).find('.myInput').hover(() => { this.playAniamte(animate) });
                break;
        }
        return oldEventObj;
    }

    playAnimates() {
        for (var animate of this.animates) {
            this.playAniamte(animate);
        }
    }

    playAniamte(animate: Animate) {
        switch (animate.type) {
            case "center-big":
                //中心放大
                this.$(this.el.nativeElement).find('#myInput').animate({
                    opacity: 0.25,
                    left: "+=50",
                    height: "toggle"
                }, 5000, function () {
                    // Animation complete.
                });
                break;
            case "popup":
                //弹出
                this.$(this.el.nativeElement).find('.myInput').animate();
                break;
        }
    }

    selectAnimateTouchEvent(animate: Animate, event) {
        animate.touchEvent = event;
        console.log(event)
        var oldEventObj = this.useAnimate(animate);
        this.cancelEvent(oldEventObj);
    }

    cancelEvent(eventObj) {
        this.$(this.el.nativeElement).find('#myInput').unbind(eventObj);
    }
    saveMyInputContent(myInputText) {
        this.$(this.el.nativeElement).find('#myInput').html(this.activeTinymceHTMLContent);
        this.myInput.innerHTML = this.activeTinymceHTMLContent;
    }

    deleteMe() {
        this.appService.deletePart(this.path, this.myInput);
    }
    copy() {
        this.appService.addPart(this.path, this.myInput);
    }

    changeMyInputType(type:string){
        this.myInput.type=type;
    }
    
    changeMyInputColor(color:string){
        this.myInput.color= color;
    }
    changeMyInputBackgroundColor(backgroundColor:string){
        this.myInput.backgroundColor=backgroundColor;
    }

    hasBackgroundColor(value:boolean){
    
      value?this.myInput.backgroundColor="transparent":this.myInput.backgroundColor="white";
    }
}
