import {Component,Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class DataService{
    constructor() {}

    getJSON (url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
};



    async getWebsiteData(){


        return  this.getJSON("website-data.json");

    }


}