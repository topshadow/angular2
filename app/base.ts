export class Base{
   public get isEdit() {
       return window['isEdit'];
   }

   isShowEditPanel=false;
    toggleEditPanel(){
        this.isShowEditPanel=!this.isShowEditPanel;
    }
    public    get $(){
        return window['$'];
    }
}