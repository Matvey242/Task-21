const { Router } = require('express')
const UserController = require('../controllers/userControllers')

const router = Router()

router.get('/api/getUsers', UserController.getUsers)
router.get('/api/getUser/:id', UserController.getUser)
router.patch('/api/patchUser/:id', UserController.patchUser)
router.post('/api/addUser', UserController.addUser)
router.delete('/api/deleteUser/:id', UserController.deleteUser)

module.exports = router