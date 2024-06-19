const { registerController } = require('./it_user_controller');

const { appCategoryContrl,
        createAppCategoryController,
        editAppCategory,
        deleteAppCategory,
        oneAppById, } = require('./app_category_controller');

const { createCompanyController } = require('./company_controller');

module.exports = { 
    registerController,
    appCategoryContrl,
    createAppCategoryController,
    editAppCategory,
    deleteAppCategory,
    oneAppById,
    createCompanyController
}
