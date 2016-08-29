import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/subject';


@Injectable()
export class MessoonService{
    private missionAnnouncedSource  = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    
    missionAnnouced$  = this.missionAnnouncedSource.asObservable();
    missionConfiremed$ = this.missionConfirmedSource.asObservable();


    announceMission(mission:string){
            this.missionAnnouncedSource.next(mission);
    } 
    
    confirmMission(mission:string){
        this.missionConfirmedSource.next(mission);
    }
    

}