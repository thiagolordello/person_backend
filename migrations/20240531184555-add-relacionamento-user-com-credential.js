'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('credential', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('credential', 'user_id');
  }
};