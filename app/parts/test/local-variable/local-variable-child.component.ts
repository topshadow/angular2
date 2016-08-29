import {Component, OnChanges, OnInit, OnDestroy} from '@angular/core';
/**
 * 这是一个计时器,父子组件通过调用本地变量来调用组件功能
 * 
 */


@Component({
    selector: 'local-variable-child',
    template: `
    {{message}}
    `
})
export class LocalVariableChildComponent implements OnInit, OnDestroy {

    intervarId = 1;
    message: string = '';
    seconds = 11;

    clearTimer() {
        clearInterval(this.intervarId);
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.clearTimer();
    }
    start() {
        this.countDown();
    }

    stop(){
        this.clearTimer();
    }
    private countDown(){
        this.intervarId = window.setInterval(()=>{
                this.seconds -=1;
                if(this.seconds === 0){
                    this.message ="结束"
                }else{
                    if(this.seconds<10){
                        this.message =`当前时间是${this.seconds}秒`
                    }
                    if(this.seconds<0){
                        this.message=`当前计时结束`;
                        this.seconds=11;
                    }


                }
        },1000);
    }
}