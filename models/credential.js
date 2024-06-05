const CredentialModel = (sequelize, DataTypes) => {
  const Credential = sequelize.define(
    'credential',
    {

      id_credential: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id_user',
        },
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'app_category',
          key: 'id_category',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      profile_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'profile_user',
          key: 'id_profile_user',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'status',
          key: 'id_status',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
      },

      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'it_user',
          key: 'id_it_user',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },

      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'it_user',
          key: 'id_it_user',
        },
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'credential',
    },
  );

   Credential.associate = (models) => {
    Credential.belongsTo(models.app_category, { foreignKey: 'category_id', as: 'app_category' });
    Credential.belongsTo(models.profile_user, { foreignKey: 'profile_user_id', as: 'profile_user' });
    Credential.belongsTo(models.status, { foreignKey: 'status_id', as: 'status' });
    Credential.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
    Credential.belongsTo(models.it_user, { foreignKey: 'created_by' , as: 'created_by_user' });
    Credential.belongsTo(models.it_user, { foreignKey: 'updated_by' , as: 'updated_by_user' });

  };

  return Credential;
};

module.exports = CredentialModel;