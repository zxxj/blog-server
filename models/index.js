const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test-blog').then(res => {
	// console.log(res);
	console.log("连接成功");
}).catch(err => {
	// console.log(err);
	console.log("连接失败");
})

const Schema = mongoose.Schema;

// 定义文章表结构
const ArticleSchema = new Schema({
	title: String,
	content: String,
	author: String,
	tag: String,
	viewsNumber: {
		type: Number,
		default: 0
	},
},
	{
		timestamps: true
	}
)

// 创建数据模型,根据表结构创建数据模型,并且将表结构映射数据中一个Articles这个表,通过Articles表对象就可以对数据库中的数据进行增删改查操作
const Article = mongoose.model("Article", ArticleSchema)

// 向表中插入数据
Article.create({
	title: "测试文章",
	content: "测试文章内容",
	author: "测试作者",
	tag: "测试文章类型",
}).then(res => {
	console.log(res);
})