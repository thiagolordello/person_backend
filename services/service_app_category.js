// const moment = require('moment');
const { app_category } = require('../models');

const getAllappCategories = async () => {
  const result = await app_category.findAll({
    where: { id_user: id },
  });
  return result;
};

const createAppCategoryService = async (name_category) => {
  // const newTask = {
  //   idUser,
  //   description,
  //   status,
  //   createdAt: moment().format(),
  // };
  const result = await app_category.create(name_category);
  return result;
};

const getOneAppCategoryService = async (id) => {
  const result = await app_category.findByPk(id);
  if (!result) return null;
  return result;
};

const updateAppCategoryService = async (id, description, status) => {
  const updatedNow = await app_category.findByPk(id, {
    attributes: { exclude: ['id', 'idUser', 'createdAt'] },
  });
  if (!updatedNow) return null;
  // const  { description, status } = req.body;
  const result = await app_category.update(
    { description, status },
    {
      where: { id },
    },
  );
  if (!result) return null;

  return result;
};

const removeAppCategoryService = async (id) => {
  const task = await app_category.destroy({ where: { id } });
  if (!task) return null;
  return task;
};

module.exports = {
  getAllappCategories,
  getOneAppCategoryService,
  createAppCategoryService,
  updateAppCategoryService,
  removeAppCategoryService,
};
