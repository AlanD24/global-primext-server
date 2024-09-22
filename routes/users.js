const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/UserController');

// Routes for authentication
router.get('/test', UserController.test);
router.get('/all', UserController.getUsers);
router.post('/create', UserController.createUser);
router.put('/edit', UserController.editUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;