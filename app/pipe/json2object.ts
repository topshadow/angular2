import {Pipe, PipeTransform } from '@angular/core';


@Pipe({name:'json2object'})
export class  Json2Object implements  PipeTransform{
    transform(value:string, jsonObject:string):Object {
        return  JSON.parse(value);
    }
}

