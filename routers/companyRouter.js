const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.post('/register_company', controllers.createCompanyController);

module.exports = router;