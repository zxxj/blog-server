const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema(
	{
		content: String,
		article_id: { type: Schema.Types.ObjectId, ref: 'Article' },
		reply_user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{
		timestamps: true
	}
)

const Comment = mongoose.model("Comment", CommentSchema)

// Comment.create({
// 	content: "非常好",
// 	article_id: '666ddbc373fb871bf231739b',
// 	reply_user_id: '666dda41115cb097ef4ac379'
// }).then(res => {
// 	console.log(res);
// })

// 根据文章id查询有几条评论
Comment.find({ article_id: '666ddbc373fb871bf231739b' }).populate('reply_user_id', { password: 0 }).then(res => {
	console.log(res);
})