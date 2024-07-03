const express = require('express');  
const bodyParser = require('body-parser');
const app = express();  
const port = 3000; // 你可以选择任何未被占用的端口  
const db = require('./db')

//实现login
// const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 设置中间件以允许跨域请求（可选，根据你的需求）  
app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  next();  
});  

// 登录接口
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM user_login WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      return res.send({
        status: 500,
        message: "Internal Server Error"
      });
    }
    if (data.length > 0) {
      res.send({
        status: 200,
        message: "Login successful",
        token: 'fake-jwt-token' // 可以生成一个实际的 JWT token
      });
    } else {
      res.send({
        status: 400,
        message: "Invalid username or password"
      });
    }
  });
});









// 获取用户数据的接口
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, data) => {
    if (err) {
      return res.send({
        status: 500,
        message: "Internal Server Error"
      });
    }
    res.send({
      status: 200,
      data: data
    });
  });
});

// 启动服务器  
app.listen(port, () => {  
  console.log(`Server is running on http://localhost:${port}`);  
});