const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
router.post('/register_it_user', controllers.registerController);

module.exports = router;