# 第二天

上午过[angular2官方文档](https://angular.cn/)

## 快速起步

#四个配置文件
* package.json 
* tsconfig.json 
* typings.json 
* system.config.js

### package.json
* dependencies 和 devDependencies 的区别
npm run typings install


component->module->bootstrap


BrwoserModule-> @angular/platform-brwoser;
CommonModule-> @angular/common;
RouterModule-> @angular/router;
FormsModule-> @angular/forms;
routing-> './app.routing';

```java
//people.ts
interface People{
    name:stringl;
    classMate:ClassMate;
}

//classmate.ts
interface ClassMate{
    peoples:People[];
}
```
## 数据注入
## Service层 数据层的复用

* 属性绑定/数据注入 [class.asd]
* 元数据 @Component()
* 事件绑定 (click)
* 模板 html
* 指令 directive ->元数据
* service层 @injectable()


数据绑定:
* 单项绑定 {{property}}
* [property="value"

//link.html
<a [title]="title"></a>
//link.ts
export class LinkComponent{
    title="this is title";
}

<a [title]="'title' "></a>
