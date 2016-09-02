interface Animate {
    touchEvent: 'display' | 'click' | 'mouse-hover',
    type: 'center-big' | '';
    time: number;//事件
    times: number;
    delayeTime: number;//拖延时间

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