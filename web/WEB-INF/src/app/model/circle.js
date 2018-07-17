define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function area(radius) {
        return Math.PI * radius * radius;
    }
    exports.area = area;
    function circumference(radius) {
        return 2 * Math.PI * radius;
    }
    exports.circumference = circumference;
});
