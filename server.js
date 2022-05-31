const http = require('http')

// 创建本地服务器来从其接收数据
const server = http.createServer((req, res) => {
  console.log('request received')
  // console.log(req)
  console.log(req.headers)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `<html hellocaicai>
<head>
  <style>
    body div #myid {
      width: 100px;
      background-color: #ff5000;
    }
    body div img {
      width: 80px;
      background-color: #ff1111;
    }
  </style>
</head>
<body>
  <div>
    <img id="myid" />
    <img />
  </div>
</body>
</html>`
  )
})

server.listen(8888, () => {
  console.log('服务器启动成功，端口：8888')
})
