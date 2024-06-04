const md5 =require ('md5');
const { User: itUser } = require('../models');

const registerItUserService = async (name_it_user,password) => {
   const encodedPasswd = md5(password);
   const ifNameExists = await itUser.findOne({ where: { name_it_user } });

   if (ifNameExists) return null;

   const result = await itUser.create({ name_it_user,password: encodedPasswd });
   return result;
};

module.exports = { registerItUserService };