module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('manager', {
    id_manager: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name_manager: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('manager');
  },
};
