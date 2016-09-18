import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../sign-in/sign-in.css']
})
export class SignUpComponent {
    constructor(private router: Router) {

    }

    goBack() {
        history.back();
    }
    signUp(username, password) {
        window['$'].ajax({
            url: "/sign-up",
            data: {
                username: username,
                password: password
            },
            success: (rtn) => {
                if (rtn.issuccess) {
                    this.router.navigate(['index']);
                }else{
                    alert(rtn.msg);
                }

            }
        })
    }
}