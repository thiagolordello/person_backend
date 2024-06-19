const { company } = require('../models');

const createCompanyService = async (name_company) => {
    const result = await company.create(name_company);
    return result;
}

module.exports = { 
    createCompanyService,
 };