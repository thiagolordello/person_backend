module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name_user: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    status_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'status',
        key: 'id_status',
      },
    },

    personal_email: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    cellphone: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    startDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },

    it_user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'it_user',
        key: 'id_it_user',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    is_manager: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    manager_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'manager',
        key: 'id_manager',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    role_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'role',
        key: 'id_role',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    company_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'company',
        key: 'id_company',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },

    /* credential_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey: true,
      references: {
        model: 'credential',
        key: 'id_credential',
      },
    }, */
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('user');
  },
};
