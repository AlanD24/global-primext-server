const { Router } = require('express');
const router = Router();
const ExpensesRoutes = require('./expenses');
const UserRoutes = require("/users");

// Add other routes
router.use('/expenses', ExpensesRoutes);

module.exports = router;