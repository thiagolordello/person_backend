const ProfileUserModel = (sequelize, DataTypes) => {
  const profileuser = sequelize.define(
    'profile_user',
    {

      id_profile_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name_profile_user: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'profile_user',
    },
  );

  profileuser.associate = (models) => {
    profileuser.hasMany(models.CredentialModel, { foreignKey: 'profile_user_id', as: 'credential' });
  };

  return profileuser;
};

module.exports = ProfileUserModel;
