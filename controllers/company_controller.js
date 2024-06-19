const { createCompanyService } = require('../services');

const createCompanyController = async(req,res)=> {
   try {
    const { name_company } = req.body;
    const result =  await createCompanyService(name_company);
    const { id_company } = result;
    return res.status(200).json({id_company,name_company})

   } catch (error) {
    return res.status(500).json({ message: error.message });
   }
}; 

module.exports = {
    createCompanyController,
}