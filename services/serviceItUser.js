const md5 =require ('md5');
const { it_user } = require('../models');

const registerItUserService = async (name_it_user,password) => {
   const encodedPasswd = md5(password);
   const ifNameExists = await it_user.findOne({ where: { name_it_user } });

   if (ifNameExists) return null;

   const result = await it_user.create({ name_it_user,password: encodedPasswd });
   return result;
};

module.exports = { registerItUserService };