import {Injectable, OnInit} from '@angular/core';



@Injectable()
export class LoggerService {
    logs: Map<string, any> = new Map<string, any>();;
    constructor() { }
    addLog(_log) {
        this.logs.set(_log.key, _log.value);
    }

    outLog() {
        this.logs.forEach((value: any, key: string) => {
            console.log(`${key}:${value}`);
        });

    }
}