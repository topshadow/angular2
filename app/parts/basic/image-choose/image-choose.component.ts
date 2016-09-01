//http://image.baidu.com/data/imgs?col=%E7%BE%8E%E5%A5%B3&tag=%E5%B0%8F%E6%B8%85%E6%96%B0&sort=0&pn=10&rn=10&p=channel&from=1
import {Component,OnInit} from '@angular/core';
import {LoggerService} from '../../../logger.service';


@Component({
    moduleId:module.id,
    selector:'image-choose',
    templateUrl:'./image-choose.html'
})
export class ImageChooseComponent implements OnInit{

    images;
    constructor(private logger:LoggerService){}

    ngOnInit(){
        var chooser =this;

        
        window['$'].ajax({
            methond:'GET',
            url:'data/images.json',
            success:function(rtn){
                chooser.logger.addLog({
                    key:'image choose value',
                    value:rtn
                });
                chooser.images=rtn.images;
            }
        });
    }

}
