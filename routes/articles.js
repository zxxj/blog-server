const express = require('express');
const router = express.Router();

// 发布文章
router.post('/', (req, res, next) => {
  console.log(req.body);

  res.json({
    code: 1,
    message: "文章发布成功!",
  })
})

// 根据用户id获取文章列表
router.get("/users/:userId", (req, res, next) => {
  console.log(req.params);

  res.json({
    code: 1,
    message: "查询成功!"
  })
})

// 根据文章id修改文章内容
router.patch("/:articleId", (req, res, next) => {
  console.log(req.params);
  console.log(req.body);
  res.json({
    code: 1,
    message: "文章修改成功!"
  })
})

// 删除文章
router.delete('/:articleId', (req, res, next) => {
  console.log(req.params);
  res.json({
    code: 1,
    message: "文章删除成功!"
  })
})

module.exports = router;
