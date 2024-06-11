const express = require('express')

// 上传文件模块
const multer = require('multer')

// 内置path模块
const path = require('path')

// 配置上传图片的路径
const storeage = multer.diskStorage({
	// 上传图片的路径
	destination: (req, file, cb) => {
		cb(null, 'public/images')
	},
	filename: (req, file, cb) => {
		// 获取前端上传图片的后缀名(.png .webp)
		// console.log(path.extname(file.originalname));
		// 设置文件名
		cb(null, Date.now() + path.extname(file.originalname))
	}
})

// 创建upload中间件
const upload = multer({ storage: storeage}).single('img')

const router = express.Router()

router.post('/', upload, (req, res, next) => {
	const fileName = req.file.filename;
	const imgUrl = "/images/" + fileName
	
	res.json({
		code: 1,
		message: "上传成功!",
		data: {
			img: imgUrl
		}
	})
})

module.exports = router