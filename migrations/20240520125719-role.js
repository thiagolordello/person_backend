module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('role', {
    id_role: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name_role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('role');
  },
};
