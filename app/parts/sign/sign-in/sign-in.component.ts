import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {Base} from  '../../../base';
import {AppService} from '../../../app.service';



@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    viewProviders: [],
    styleUrls: ['./sign-in.css']
})
export class SignInComponent extends Base implements OnInit {
    username:string='';
    password:string='';
    autoSignIn:boolean=false;
    constructor(private el: ElementRef, private appService: AppService,  router: Router) {super(router) }
    ngOnInit() { 
        //如果有缓存用户名,和自动登录标志,则自动登录
            this.username= localStorage.getItem('username')?localStorage.getItem('username'):'';
            this.password=localStorage.getItem('password')?localStorage.getItem('password'):'';
            this.autoSignIn=localStorage.getItem('autoSignIn')=="true"?true:false;
            if(this.autoSignIn){
                this.signIn();
            }
    }
    toggleAutoSignIn(){
        this.autoSignIn=!this.autoSignIn;
    }

    addTitle(title) {}

    hidePanel(panel) {
        $(panel).hide();
        $(this.el.nativeElement).find('.showPanelButton').click(() => {
            $(panel).show();
        });
    }

    signIn() {
        window['$'].ajax({
            url: '/sign-in',
            data: {
                username: this.username,
                password: this.password
            },
            success: (rtn) => {
                if (rtn.issuccess) {
                    //将字符串转换成对象
                    localStorage.setItem('username',this.username);
                    localStorage.setItem('password',this.password);
                    localStorage.setItem('autoSignIn',this.autoSignIn.toString());
                    rtn.user = JSON.parse(rtn.user);
                    this.appService.userService.user = rtn.user;
                    //弹出对话框,选择编辑模式登陆还是预览模式登陆
                    this.$(this.el.nativeElement).find('.modal').modal('toggle');

                } else {
                    alert(rtn.msg)
                }
            }

        })
    }

    editLogin(){
        this.router.navigate(['/index',{isEdit:true}]);
        
    }

    previewLogin(){
        this.router.navigate(['/index']);
    }


    toSignUp() {
        this.router.navigate(['sign-up']);
    }
}

