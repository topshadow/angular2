import {Component,OnInit,OnDestroy} from '@angular/core';


@Component({
    selector:'view-child-child',
    template:`{{message}}`
})
export class ViewChildChildComponent implements OnInit,OnDestroy{
    intervalId = 1;
    message:string;
    seconds:number=11;


    start(){
        this.intervalId = window.setInterval(()=>{
                this.seconds -= 1;
                if(this.seconds===0){
                    this.message = "this is seconds";
                }else{
                    if(this.seconds<0) {
                        this.message =`计时结束`;
                        this.seconds=10;
                    }
                    this.message= `${this.seconds}计数`;
                }
        },1000);
    }

    stop(){
        clearInterval(this.intervalId);
    }

    ngOnInit(){
        this.start();
    }
    
    ngOnDestroy(){
        this.stop();
    }
}