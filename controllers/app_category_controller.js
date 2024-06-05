const {
    getAllappCategories,getOneAppCategory,createAppCategory,updateAppCategory,removeAppCategory,
  } = require('../services');
  
  const appCategoryContrl = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await getAllappCategories();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  const createAppCategoryController = async (req, res) => {
    try {
      const {
        idUser, description, status,
      } = req.body;
      await createAppCategoryController({ name_category });
      return res.status(201).json({ id_category,name_category });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  const editAppCategory = async (req, res) => {
    const { id } = req.params;
    const { name_category } = req.body;
    try {
      const taskUpdate = await updateAppCategory(id, name_category);
      if (taskUpdate === null) return res.status(404).json({ message: 'Categoria de credencial não existente ou não encontrada' });
      return res.status(204).json(taskUpdate);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
 
  
  const deleteAppCategory = async (req, res) => {
    const { id } = req.params;
    try {
      const taskForRemove = await removeAppCategory(id);
      if (!taskForRemove) {
        return res.status(404).json({ message: 'Categoria de app não encontrada.' });
      }
      return res.status(200).json({ message: 'Categoria de app removida com sucesso!' });
    } catch (error) {
      return res.status(500).end();
    }
  };
  
  const oneAppById = async (req, res) => {
    const { id } = req.params;
    try {
      const task = await getOneAppCategory(id);
      if (task == null) return res.status(404).json({ message: 'Categoria de app não existente ou não encontrada' });
      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).end();
    }
  };
  
  module.exports = {
    appCategoryContrl,
    createAppCategoryController,
    editAppCategory,
    deleteAppCategory,
    oneAppById,
  };
  