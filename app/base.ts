export class Base{
   public get isEdit() {
       return window['isEdit'];
   }

   public isShowEditPanel=false;
   public toggleEditPanel(){
        this.isShowEditPanel=!this.isShowEditPanel;
    }
    public    get $(){
        return window['$'];
    }

     editor;

    //初始化页面编辑器
    constructor(){
      this.editor = window['UE'].getEditor('myEditor', {});
        window['editor']=this.editor;
    }


}