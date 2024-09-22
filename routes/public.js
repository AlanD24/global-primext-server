const { Router } = require('express');
const router = Router();
const UserRoutes = require("./users");

// Add other routes
router.use('/user', UserRoutes);

module.exports = router;