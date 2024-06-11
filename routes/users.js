const express = require('express');
const router = express.Router();

// 注册
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.json({
    code: 1,
    message: "注册成功!"
  })
})

// 登录
router.get('/', (req, res, next) => {
  console.log(req.query);
  res.json({
    code: 1,
    message: "登录成功"
  })
})

module.exports = router;
