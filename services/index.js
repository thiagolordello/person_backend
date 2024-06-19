const { registerItUserService } = require('./serviceItUser');
const { createAppCategoryService } = require('./service_app_category');
const  { createCompanyService } = require('./service_company'); 

module.exports = {
    createAppCategoryService,
    registerItUserService,
    createCompanyService,
}
