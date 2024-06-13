const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test-blog').then(res => {
	// console.log(res);
	console.log("连接成功");
}).catch(err => {
	// console.log(err);
	console.log("连接失败");
})

