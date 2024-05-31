'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('credential', 'status_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'status',
        key: 'id_status',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('credential', 'status_id');
  }
};
