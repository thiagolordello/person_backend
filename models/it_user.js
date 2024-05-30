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
      tablename: 'it_user',
      underscored: true,
      timestamps: false,
    },
  );

  /* itUser.associate = (models) => {
    itUser.hasMany(models.User, { foreignKey: 'it_user_id', as: 'user' });
    itUser.hasMany(models.CredentialModel, { foreignKey: 'created_by', as: 'credential' });
    itUser.hasMany(models.CredentialModel, { foreignKey: 'updated_by', as: 'credential' });
  };  */

  return itUser;
};

module.exports = itUserModel;
