const mongoose = require('mongoose')
const Article = require('./article')
const User = require('./user')
const Comment = require('./comment')

mongoose.connect('mongodb://localhost/blog').then(res => {
	// console.log(res);
	console.log("连接成功");
}).catch(err => {
	// console.log(err);
	console.log("连接失败");
})