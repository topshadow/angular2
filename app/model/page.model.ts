import {Part} from './part.model';
export interface Page{
    path:string;
    title:string;
    parts:Part[];
}