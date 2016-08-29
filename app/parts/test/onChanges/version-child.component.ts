import {Component,OnChanges,SimpleChange,Input} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'version-child',
    templateUrl:'./version-child.html'
})
export class VersionChildComponent implements OnChanges{
    @Input()  major:number;
    @Input()  minor:number;
    changeLog:string[] =[];

 

    ngOnChanges(changes:{[property:string]:SimpleChange}){
            let log:string [] = [];
            for(let propName in changes){
                let changePropes =  changes[propName];
                let from = changePropes.previousValue;
                let to = changePropes.currentValue;
                log.push(`${propName} version is changed from  ${from}  to ${to} `);
            }

                this.changeLog.push(log.join(', '));
    }
     



}