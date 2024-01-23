
# express

1. 安装依赖
```
npm i
```

2. 启动服务
```
npm run dev
```

3. 访问
```
http://localhost:3000/
http://localhost:3000/express.png

```

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"diqiu","email":"diqiu@example.com"}' http://localhost:3000/api/users
```


示例中，我们首先使用 `app.use` 注册了两个中间件。第一个中间件用于记录请求日志，它会在每个请求到达服务器时打印请求的方法和 URL。第二个中间件用于解析请求体中的 JSON 数据，这样我们可以方便地在 POST 请求中获取 JSON 数据。

接下来，我们使用 `app.use` 注册了一个静态文件中间件，将 `public` 文件夹作为静态资源目录。这意味着我们可以在浏览器中直接访问 `http://localhost:3000/express.png` 来获取 `public/express.png` 文件的内容。

然后，我们定义了两个路由示例。第一个路由处理根路径 `'/'` 的 GET 请求，并返回简单的文本响应。第二个路由处理 `/api/users` 的 POST 请求，并在响应中返回用户数据。

接下来，我们定义了一个 404 中间件，用于处理未匹配的路由。如果用户访问了不存在的路由，服务器将返回 404 Not Found。

最后，我们定义了一个错误处理中间件，用于处理其他中间件或路由的错误。如果在处理请求时发生错误，服务器将返回 500 Internal Server Error。

你可以将上述代码保存为 `server.js` 文件，并使用 `Node.js` 运行它。在终端中，进入保存了 `server.js` 的目录，并运行以下命令：
`npm run dev`
这将启动 `Express` 服务器，并在控制台上显示 "Server is running on port 3000" 的消息。现在，你可以在浏览器中访问 `http://localhost:3000` 来查看服务器的响应。你还可以使用工具（如 cURL 或 Postman）发送 POST 请求到 `http://localhost:3000/api/users`，并查看服务器返回的响应。

这个示例展示了 `Express` 的一些常用功能，包括中间件、路由和静态文件服务。你可以根据需要扩展和定制这个示例，以满足你的具体需求。