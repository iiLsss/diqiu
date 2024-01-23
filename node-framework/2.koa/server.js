const Koa = require('koa');
const Router = require('koa-router');

// 创建 Koa 应用和路由
const app = new Koa();
const router = new Router();

// 定义路由处理程序
router.get('/', async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

router.get('/users', async (ctx) => {
  ctx.body = 'User list';
});

router.post('/users', async (ctx) => {
  // 处理 POST 请求
  // 从请求体中获取数据
  const { name, email } = ctx.request.body;

  // 在这里可以将用户数据保存到数据库或进行其他处理

  ctx.body = 'User created';
});

// 将路由注册到应用
app.use(router.routes());
app.use(router.allowedMethods());

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});