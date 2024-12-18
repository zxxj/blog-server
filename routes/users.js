const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

// 注册
router.post('/', (req, res, next) => {
  console.log(req.body);
    res.json({
      code: 1,
      message: "注册成功!",
      token
    })
})

// 登录
router.get('/', (req, res, next) => {
  console.log(req.query);
    if(req.query.username === 'admin' && req.query.password === '123456') {
    // textjwt: 加密规则 expiresIn: 过期时间 algorithm: 加密算法
    const token = jwt.sign({username: req.query.username}, 'testjwt', {expiresIn: '10s', algorithm: 'HS256'})
    res.json({
      code: 1,
      message: "登录成功!",
      token
    })
  }else {
    res.json({
      code: 0,
      message: "登录失败"
    })
  }
})

module.exports = router;
