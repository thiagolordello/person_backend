const express = require('express');
const registerItRouter = require('./register_it_router');
const createAppCategory = require('./appCategoryRouter');

module. exports = {
    registerItRouter,
    createAppCategory,
}