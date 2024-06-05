const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {

      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name_user: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: 'status',
          key: 'id_status',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      personal_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      cellphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
      },

      it_user_id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      manager_id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: 'company',
          key: 'id_company',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
      
    },
    {
      underscored: true,
      timestamps: true,
      tableName: 'user',
    },
  );

  User.associate = (models) => {
    User.belongsTo(models.role, { foreignKey: 'role_id', as: 'role' });
    User.belongsTo(models.status,{ foreignKey: 'status_id',as: 'status' });
    User.belongsTo(models.it_user, { foreignKey: 'it_user_id', as: 'it_user' });
    User.belongsTo(models.company, { foreignKey: 'company_id', as: 'company' });
    User.belongsTo(models.manager, { foreignKey: 'manager_id', as: 'manager' });
    User.hasMany(models.credential, { foreignKey: 'user_id', as: 'credential' });
  };

  return User;
};

module.exports = UserModel;