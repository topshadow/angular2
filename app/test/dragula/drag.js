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
var core_1 = require('@angular/core');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var TestDrag = (function () {
    function TestDrag() {
        this.items = ['a', 'b', 'c', 'd'];
    }
    TestDrag = __decorate([
        core_1.Component({
            selector: 'test-drag',
            directives: [ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            template: "\n <div>\n    <div class='wrapper'>\n      <div class='container' [dragula]='\"first-bag\"'>\n        <div>You can move these elements between these two containers</div>\n        <div>Moving them anywhere else isn't quite possible</div>\n        <div>There's also the possibility of moving elements around in the same container, changing their position</div>\n      </div>\n      <div class='container' [dragula]='\"first-bag\"'>\n        <div>This is the default use case. You only need to specify the containers you want to use</div>\n        <div>More interactive use cases lie ahead</div>\n        <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>\n      </div>\n    </div>\n  </div> \n\n\n\n  ",
            styleUrls: ['app/test/dragula/drag.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TestDrag);
    return TestDrag;
}());
exports.TestDrag = TestDrag;
//# sourceMappingURL=drag.js.map