'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('credential', {
    id_credential: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    /* user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id_user',
      },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }, */

    category_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'app_category',
        key: 'id_category',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    profile_user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'profile_user',
        key: 'id_profile_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    /* status_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id_status',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }, */

    notes: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },

    /* created_by: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'it_user',
        key: 'id_it_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }, */

    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },

    /* updated_by: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'it_user',
        key: 'id_it_user',
      },
    }, */
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('credential');
  },
};
