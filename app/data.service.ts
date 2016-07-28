import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService{
    constructor(private http : Http){}
    private   websiteUrl = 'data.json';

    getWebsiteData (){
        return this.http.get(this.websiteUrl).map(function(res:Response){
                let body = res.json();
            return body.data ||{};
        });
    }


    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}