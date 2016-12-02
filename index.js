// 导入 koa 依赖
const Koa = require('koa');
// 路由中间件koa-router 暴露出来的是一个函数
const router = require('koa-router')();
// 静态文件支持
const serve = require('koa-static')

// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 静态服务器
app.use(serve(__dirname + '/assets'));

// 控制器中间件
const controller = require('./middlewares/controller')
// 注册配置好的路由
app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');