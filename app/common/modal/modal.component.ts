import {Component} from '@angular/core';

@Component({
    selector:'my-modal',
    template:`
    <!-- Modal -->
<div #animateModal class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">动画</h4>
            </div>
            <div class="modal-body">
                <ul>
                <li *ngFor> </li>
                </ul>
                <button class="btn btn-primary btn-xs" (click)="addAnimate()">添加动画</button>
                <button class="btn btn-primary btn-xs" (click)="playAnimates()">播放动画</button>
                <div class="modal-footer">
                
                </div>
            </div>
        </div>
    </div>
    
    `
})
export class ModalComponent{

}