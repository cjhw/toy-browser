const http = require('http')

// 创建本地服务器来从其接收数据
const server = http.createServer((req, res) => {
  console.log('request received')
  // console.log(req)
  console.log(req.headers)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `<html hello caicai>
    <head>
      <style>
        #container {
          width: 500px;
          height: 300px;
          display: flex;
          background-color: rgb(255,255,255);
        }
        #container #myid {
          width: 200px;
          height: 100px;
          background-color: rgb(255,0,0);
        }
        #container .c1 {
          flex: 1;
          background-color: rgb(0,255,0);
        }
      </style>
    </head>
    <body>
        <div id="container">
          <div id="myid"></div>
          <div class="c1"></div>
        </div>
    </body>
  </html>`
  )
})

server.listen(8888, () => {
  console.log('服务器启动成功，端口：8888')
})
