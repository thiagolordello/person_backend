const itUserModel = (sequelize, DataTypes) => {
  const itUser = sequelize.define(
    'it_user',
    {

      id_it_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name_it_user: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      tableName: 'it_user',
      underscored: true,
      timestamps: false,
    },
  );

  itUser.associate = (models) => {
    itUser.hasMany(models.user, { foreignKey: 'it_user_id', as: 'user' });
    itUser.hasMany(models.credential, { foreignKey: 'created_by', as: 'created_credentials' });
    itUser.hasMany(models.credential, { foreignKey: 'updated_by', as: 'updated_credentials' });
  };

  return itUser;
};

module.exports = itUserModel;
