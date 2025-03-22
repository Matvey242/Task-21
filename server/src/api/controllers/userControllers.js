const UserModel = require('../models/user.model')

class UserController {
	static async getUsers(req, res) {
		try {
			const users = await UserModel.find()
			res.send(users)
		} catch (err) {
			console.log('Произошла ошибка при получении пользователей', err)
			res.send({ message: 'Произошла ошибка при получении пользователей', err })
		}
	}

	static async getUser(req, res) {
		const { id } = req.params
		try {
			const user = await UserModel.findById(id)
			res.send(user)
		} catch (err) {
			console.log('Произошла ошибка при получении пользователя по id', err)
			res.send({ message: 'Произошла ошибка при получении пользователя по id', err })
		}
	}

	static async patchUser(req, res) {
		const { id } = req.params
		const updateData = req.body
	  
		try {
		  const updatedUser = await UserModel.findByIdAndUpdate(id, { $set: updateData }, { new: true })
		  res.send(updatedUser)
		} catch (err) {
		  console.log('Произошла ошибка при изменении пользователя по id', err)
		  res.status(500).send({ message: 'Произошла ошибка при изменении пользователя по id', err })
		}
	  }

	static async deleteUser(req, res) {
		  const { id } = req.params
		  try {
			  await UserModel.findByIdAndDelete(id)
			  res.send(`Пользователь успешно удален`)
		  } catch (err) {
			  console.log('Произошла ошибка при удалении пользователей', err)
			  res.send({ message: 'Произошла ошибка при удалении пользователей', err })
		  }
		}

	static async addUser(req, res) {
		const { name, price, isOnSale } = req.body
		try {
			const newUser = new UserModel({
				name,
				price,
				isOnSale
			})

			const savedUser = await newUser.save()
			res.status(201).send(savedUser)
		} catch (err) {
			console.log('Ошибка при создании пользователя', err)
			res
				.status(500)
				.send({ message: `Ошибка при создании пользователя: ${err.message}` })
		}
	}

}

module.exports = UserController
