import {Component, Input, ElementRef, OnInit,HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {Base}  from '../../../base';
import {AppService} from '../../../app.service';


@Component({
    moduleId: module.id,
    selector: 'my-button',
    templateUrl: './my-button.component.html',
    directives:[]
})
export class MyButtonComponent extends Base {
    @Input() myButton: MyButton;
    menuList: Menu[];
    selectedButtonLinkName: string;
  

    get $myButtonEl() {
        return this.$(this.el.nativeElement).find('.myButton');
    }
    
    @HostListener('mouseenter',['$event'])
    mouseEnterColor(event){
        // console.log(event);
        this.$myButtonEl.css({color:this.myButton.hoverColor,
        "background-color":this.myButton.hoverBackgroundColor,
        "border-color":this.myButton.hoverBorderColor
        })
    }
    @HostListener('mouseleave',['$event'])
    mouseLeaveColor(event){
        this.$myButtonEl.css({color:this.myButton.color,
            "background-color":this.myButton.backgroundColor,
            "border-color":this.myButton.borderColor
        })
    }

    constructor(public el: ElementRef, public appService: AppService, public router: Router) {
        super(router);
        this.myButton = {
            left: '50%',
            top: '300px',
            width: '300px',
            height: '60px',
            style: 'style1',
            text: '按钮',
            position: 'absolute',
            part: 'my-button',
            color: 'black',
            backgroundColor: 'white',
            link: '',
            useNewFrameOpen:false,
            borderColor:'',
            borderRadius:0,
            borderWidth:0,
            hoverBackgroundColor:'',
            hoverColor:'',
            hoverBorderColor:'',
            zIndex:100
        };
        this.menuList = this.appService.getMenuList();
    }
    ngOnInit() {
        if (this.myButton.link) {
            this.addButtonLink(this.myButton.link);
        }
    }

    addButtonLink(path: string) {
        path = path.indexOf('/') == 0 ? path : "/" + path;

        this.$myButtonEl.click(() => {
            
            this.router.navigate([path])
        });
    }

    changePosition(e) {
        var left = window['$'](e.target).css('left');
        var top = window['$'](e.target).css('top');
        var position = window['$'](e.target).css('position');
        console.log(left, top, position, this.myButton);
        this.myButton.left = left;
        this.myButton.top = top;
        this.myButton.position = position;
    }


    dragStart(e) {
        console.log(e);
    }

    resizeStop(e) {
        this.myButton.width = e.target.style.width;
        this.myButton.height = e.target.style.height;
    }

    changeButtonLink(menu: Menu) {
        this.myButton.link = menu.path;
        this.addButtonLink(menu.path);
        this.selectedButtonLinkName = menu.title;
    }

    useExternalLink(externalLink: string) {
        console.log(externalLink, this.myButton.useNewFrameOpen);
        if(!externalLink){
            return ;
        }
        externalLink = externalLink.indexOf("http://") == 0 ? externalLink : "http://" + externalLink;
        this.$myButtonEl.unbind('click').click(() => {
            if (externalLink) {
                window.open(externalLink);
            } else {
                location.href = externalLink;
            }
        })
    }
    toggleNewFrame() {
        this.myButton.useNewFrameOpen = !this.myButton.useNewFrameOpen;
    }
    
    upZIndex(){
        this.myButton.zIndex++;
    }
    downZIndex(){
        this.myButton.zIndex--;
    }

    topZIndex(){
        this.myButton.zIndex=9999;
    }
    bottomZIndex(){
        this.myButton.zIndex=0;
    }

    deleteMe(){
        this.appService.deletePart(this.path,this.myButton);
    }

    copy(){
        this.appService.addPart(this.path,this.myButton);
    }


}