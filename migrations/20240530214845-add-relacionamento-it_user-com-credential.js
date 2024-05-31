'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('credential', 'created_by', {
      type: Sequelize.INTEGER,
      references: {
        model: 'it_user',
        key: 'id_it_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addColumn('credential', 'updated_by', {
      type: Sequelize.INTEGER,
      references: {
        model: 'it_user',
        key: 'id_it_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('credential', 'created_by');
    await queryInterface.removeColumn('credential', 'updated_by');
  }
};