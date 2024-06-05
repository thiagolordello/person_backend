// const moment = require('moment');
const { TasksUser } = require('../models');

const getAllappCategories = async () => {
  const result = await TasksUser.findAll({
    where: { id_user: id },
  });
  return result;
};

const createAppCategory = async (idUser, description, status) => {
  // const newTask = {
  //   idUser,
  //   description,
  //   status,
  //   createdAt: moment().format(),
  // };
  const result = await TasksUser.create(idUser, description, status);
  return result;
};

const getOneAppCategory = async (id) => {
  const result = await TasksUser.findByPk(id);
  if (!result) return null;
  return result;
};

const updateAppCategory = async (id, description, status) => {
  const updatedNow = await TasksUser.findByPk(id, {
    attributes: { exclude: ['id', 'idUser', 'createdAt'] },
  });
  if (!updatedNow) return null;
  // const  { description, status } = req.body;
  const result = await TasksUser.update(
    { description, status },
    {
      where: { id },
    },
  );
  if (!result) return null;

  return result;
};

const removeAppCategory = async (id) => {
  const task = await TasksUser.destroy({ where: { id } });
  if (!task) return null;
  return task;
};

module.exports = {
  getAllappCategories,
  getOneAppCategory,
  createAppCategory,
  updateAppCategory,
  removeAppCategory,
};
