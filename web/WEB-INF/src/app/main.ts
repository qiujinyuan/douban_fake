import {
    multiply,
    v1,
    v2
} from "./model/profile";

import * as circle from "./model/circle";

import customName from "./model/export-default";

// TypeScript加载模块，加载 node_module/@types/lodash/index.d.ts 文件声明的模块
// 或是用于 nodeJS 加载模块，需要将模块加载方式修改为 "CommonJS"；启动 nodeJS 服务
// import _ = require("lodash");

// 用于 RequireJS 在 web 应用下加载 lodash.js 文件
import _ = require("../lib/lodash");

// console.log(multiply(1, 2));
v1();
v2();

// 模块整体加载所在的对象不允许运行时改变
// circle.area = function() {return ""}

console.log("面积：" + circle.area(2));
console.log("周长：" + circle.circumference(3));

customName();

console.log(_.add(1, 2));
