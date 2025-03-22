const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String },
    price: { type: Number },
    isOnSale: { type: Boolean }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel
