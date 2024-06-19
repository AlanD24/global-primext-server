const { Router } = require('express');
const router = Router();
const ExpensesController = require('../controllers/ExpensesController');

// Routes for authentication
router.get('/test', ExpensesController.test);

module.exports = router;