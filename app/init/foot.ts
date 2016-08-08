import {Component,Input} from '@angular/core';

@Component({
    selector:'foot',
    template:`<div class="footerBar">
          <p>版权所有 © 2011-2016 上海旅烨网络科技有限公司，严禁抄袭复制</p>
          <p>ICP备案号：沪ICP备15011558号</p>
     </div>`,
    styles:[' .footerBar{ background:#000; color: #fff; text-align: center; padding: 30px;}']
})
export class Foot{
    @Input()
    public data;

}