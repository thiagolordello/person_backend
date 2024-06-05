const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.post('/register_app_category', controllers.createAppCategoryController);

