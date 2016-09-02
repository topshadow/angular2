import {Component, ChangeDetectionStrategy, ViewChild, ViewContainerRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

import {AppService} from '../../../app.service';
import {Base} from '../../../base';

@Component({
  moduleId: module.id,
  selector: 'topbar',
  templateUrl: './topbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBar extends Base{
  page: any;
  nav: any;

  public constructor(public router:Router,private appService: AppService, private route: ActivatedRoute) {
    super(router);
    this.route.params.subscribe(params => {
      let path = params['path'];
      this.page = appService.getPage(path);
      this.nav = appService.getNavData();
    })
  }

  deletePart(part) {
    var index = this.page.parts.indexOf(part);
    var after = this.page.parts.slice(index + 1);

    var before = this.page.parts.slice(0, index);
    this.page.parts = before.concat(after);
  }

  upPart(part) {

    var index = this.page.parts.indexOf(part);
    if (index !== 0) {
      var preElement = this.page.parts[index - 1];
      this.page.parts[index] = preElement;
      this.page.parts[index - 1] = part;
    }

  }

  downPart(part) {
    var index = this.page.parts.indexOf(part);
    if (index !== this.page.parts.length - 1) {
      var afterElement = this.page.parts[index + 1];
      this.page.parts[index] = afterElement;
      this.page.parts[index + 1] = part;
    }

  }

  saveWebsiteData() {
    localStorage.setItem('websiteData', JSON.stringify(window['websiteData']));
  }

  clearWebsiteData() {
    localStorage.setItem('websiteData', '');
  }

}
