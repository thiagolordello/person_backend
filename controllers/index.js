const { registerController } = require('./app_category_controller');

const { appCategoryContrl,
    createAppCategoryController,
        editAppCategory,
        deleteAppCategory,
        oneAppById, } = require('./app_category_controller');


module.exports = { 
    registerController,
    appCategoryContrl,
    createAppCategoryController,
    editAppCategory,
    deleteAppCategory,
    oneAppById,
}