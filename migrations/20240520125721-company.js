module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('company', {
    id_company: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name_company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('company');
  },
};
