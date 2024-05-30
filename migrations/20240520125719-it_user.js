module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('it_user', {
    id_it_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name_it_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('it_user');
  },
};
