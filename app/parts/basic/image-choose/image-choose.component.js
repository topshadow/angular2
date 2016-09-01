"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//http://image.baidu.com/data/imgs?col=%E7%BE%8E%E5%A5%B3&tag=%E5%B0%8F%E6%B8%85%E6%96%B0&sort=0&pn=10&rn=10&p=channel&from=1
var core_1 = require('@angular/core');
var logger_service_1 = require('../../../logger.service');
var ImageChooseComponent = (function () {
    function ImageChooseComponent(logger) {
        this.logger = logger;
    }
    ImageChooseComponent.prototype.ngOnInit = function () {
        var chooser = this;
        window['$'].ajax({
            methond: 'GET',
            url: 'data/images.json',
            success: function (rtn) {
                chooser.logger.addLog({
                    key: 'image choose value',
                    value: rtn
                });
                chooser.images = rtn.images;
            }
        });
    };
    ImageChooseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'image-choose',
            templateUrl: './image-choose.html'
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], ImageChooseComponent);
    return ImageChooseComponent;
}());
exports.ImageChooseComponent = ImageChooseComponent;
//# sourceMappingURL=image-choose.component.js.map