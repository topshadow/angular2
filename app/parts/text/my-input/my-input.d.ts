interface Animate {
    touchEvent: 'display' | 'click' | 'mouse-hover',
    type: 'center-big' | '';
    time: number;//事件
    times: number;
    delayeTime: number;//拖延时间
    eventObj:any;//触发的函数,用于jquery.unbind(eventObj)
}

interface MyInput {
    left: string;
    top: string;
    position: string;
    width: string;
    height: string;
    zIndex: number;
    text: string;
    animates: Animate[]
}