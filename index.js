// 导入 koa 依赖
const Koa = require('koa');
// 路由中间件koa-router 暴露出来的是一个函数
const router = require('koa-router')();

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 配置路由
router.get('/', async (ctx, next) => {
	console.log(ctx)
    ctx.response.body = '<h1>Index</h1>';
});

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

// 注册配置好的路由
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');