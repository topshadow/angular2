import {Injectable} from '@angular/core';


export class User {
    username: string;
    password: string;
    websiteData: Object;
}

@Injectable()
export class UserService {
    static _user: User;

    set user(user: User) {
        UserService._user = user;
    }

    get user() {
        return UserService._user;
    }

    setWebsiteData(websiteData: any) {
        window['$'].ajax({
            method: 'POST',
            url: '/update-user',
            data: { username: this.user.username, websiteData:JSON.stringify(window['websiteData']) },
            success: (rtn) => {
                if (rtn.issuccess) {
                    window['websiteData'] = websiteData;
                    // localStorage.setItem('websiteData', websiteData);
                    alert('保存成功');
                } else {
                    alert(rtn.msg)
                }
            }
        })
    }

    get websiteData(): any {
        return UserService._user.websiteData;
    }

}