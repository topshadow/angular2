import {Injectable} from '@angular/core';

interface Log{
    msg:string
    type:string
}

@Injectable()
export class Logger{
    private debug :boolean =false;
    constructor(){
        console.log(`debug state is: {{this.debug}}`);
    }
    log(log:Log){
        if(this.debug){
            console.log(log.type,':',log.msg)
        }
    }



}