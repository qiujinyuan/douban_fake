# 仿 豆瓣 应用开发

## 架构

1. 使用 SpringMVC, Hibernate, MySql
2. 前端页面框架使用 Angular2, Bootstrap 和 JQuery 开发

## 开发步骤

### 前端界面

1. 区分登陆和登录后的菜单，登录后的菜单做成 component 用于在不同的模块中引用
2. 电影、读书、音乐做成不同的组件，使用路由进行加载

### 数据库表设计

### 后端代码编写

## 经验

1. 在 angular.json 文件中引入使用 npm 安装的第三方库，包括 js 和 css, 会自动打包到 dist 目录下的 scripts.js 和 styles.js 文件中，无需手动引入，只需要在 application-mvc.xml 配置静态资源映射
    - assets 目录下的所有文件也会自动打包到 dist 目录下的 assets 目录下，图片等可以当在该目录下，然后使用绝对路径进行访问，那么当运行 angular 客户端或是在服务器端下均可以进行访问
    - 直接使用 ng serve 命令即可编写页面不用再频繁刷新服务器资源

## 备忘

1. Angular 构建应用，源代码改变后自动构建并发布，设置 index.html 的 base 标记的 href 属性值为 "/src/views/", 前后 “/” 不能省略
    - ng build --watch --base-href=/src/views/
    - ng build 命令会清空输出文件夹
2. 改变 Angular.json 的 outputPath 属性，即可将构建后的 Angular 应用代码放置到项目根目录下，服务器启动后访问主页即可启动 Angular 客户端应用
    - "outputPath": "../../views"
3. Angular 构建的应用在浏览器可以直接对 ts 代码进行调试
4. 启动 Angular 应用，并在源代码更改后自动刷新页面
    - ng serve --open
    - ng serve --open --disable-host-check 避免出现 Webpack "Invalid Host Header" 控制台报错
5. 使用 Angular 路由器，你就必须配置服务器，让它对不存在的文件返回应用的宿主页(index.html)。
   带路由的应用应该支持“深链接”。 所谓深链接就是指一个 URL，它用于指定到应用内某个组件的路径。 比如，http://www.mysite.com/heroes/42 就是一个到英雄详情页面的深链接，用于显示 id: 42 的英雄。
   当用户从运行中的客户端应用导航到这个 URL 时，这没问题。 Angular 路由器会拦截这个 URL，并且把它路由到正确的页面。
   但是，当从邮件中点击链接或在浏览器地址栏中输入它或仅仅在英雄详情页刷新下浏览器时，所有这些操作都是由浏览器本身处理的，在应用的控制范围之外。 浏览器会直接向服务器请求那个 URL，路由器没机会插手。
    - 在默认方法 index() 中定义好所有刷新页面时会发出的请求，然后返回 index.html;
    - 以 api 开头的表示是接口调用
    - url 定义的路径不能和接口名称重复
    - angular build 的 base 路径保持为 “/”，用于加载相对路径下的 js 文件，如 runtime.js
    - 静态资源映射到 angular build 的输出路径下所有 js 文件
    - web.xml 配置 error-page 时还是会返回 404 到页面上，不友好
    - 如果 base 不设置成 “/”，因为 Angular 会基于 base 标记进行导航，那么所有的 url 都会以 base 标记开头，比如 base="/app", 那么 url 就会是 “/app/detail/2" 
        - 此时如果使用发送 ajax 请求使用相对路径也会加上 app 前缀，需要使用绝对路径；
        - 此时刷新页面会访问到服务器，结果就是找不到资源（404）
    
6. 在 Angular 的 index.html 导入其他的 js 或 css 文件要使用绝对路径；相对路径是相对于 base 下的 href 的
    - 每次刷新都会请求到 index.html，所以会重新加载在 index.html 中引入的静态资源文件