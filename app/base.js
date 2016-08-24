"use strict";
var Base = (function () {
    function Base() {
    }
    Object.defineProperty(Base.prototype, "isEdit", {
        get: function () {
            return window['isEdit'];
        },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map