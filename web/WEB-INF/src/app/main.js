define(["require", "exports", "./model/profile", "./model/circle", "./model/export-default", "../lib/lodash"], function (require, exports, profile_1, circle, export_default_1, _) {
    "use strict";
    exports.__esModule = true;
    profile_1.v1();
    profile_1.v2();
    console.log("面积：" + circle.area(2));
    console.log("周长：" + circle.circumference(3));
    export_default_1["default"]();
    console.log(_.add(1, 2));
});
