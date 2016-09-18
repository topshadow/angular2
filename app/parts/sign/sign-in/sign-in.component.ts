import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../../app.service';



@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    viewProviders: [],
    styleUrls: ['./sign-in.css']
})
export class SignInComponent implements OnInit {
    username:string='';
    password:string='';
    autoSignIn:boolean=false;
    constructor(private el: ElementRef, private appService: AppService, private router: Router) { }
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
                    
                    this.router.navigate(['index']);
                    this.appService.userService.user = rtn.user;
                } else {
                    alert(rtn.msg)
                }
            }

        })
    }

    toSignUp() {
        this.router.navigate(['sign-up']);
    }
}

