module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('profile_user', {
    id_profile_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name_profile_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('profile_user');
  },
};
