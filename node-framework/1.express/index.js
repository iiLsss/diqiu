const express = require('express');
const app = express();
const port = 3000;

// 中间件示例：记录请求日志
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 中间件示例：解析请求体中的 JSON 数据
app.use(express.json());

// 静态文件中间件示例：将 public 文件夹作为静态资源目录
app.use(express.static('public'));

// 路由示例：处理根路径的 GET 请求
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 路由示例：处理 POST 请求
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // 在实际应用中，这里可以将用户数据保存到数据库
  res.json({ message: 'User created', name, email });
});

// 404 中间件示例：处理未匹配的路由
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// 错误处理中间件示例：处理其他中间件或路由的错误
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});