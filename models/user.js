const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		username: String,
		password: String,
		nickname: String,
		avatar: String
	},
	{
		timestamps: true
	})

const User = mongoose.model('User', UserSchema)

// User.create({
// 	username: "hemengyuan",
// 	password: "123456",
// 	nickname: "hmy",
// 	avatar: "https://avatar2.png"
// }).then(res => {
// 	console.log(res);
// }).catch(err => {
// 	console.log(err);
// })

module.exports = User