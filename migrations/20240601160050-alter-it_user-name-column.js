module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('it_user', 'name_it_user', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('it_user', 'name_it_user', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
