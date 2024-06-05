const roleUserModel = (sequelize, DataTypes) => {
  const roleUser = sequelize.define(
    'role',
    {

      id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name_role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'role',
    },
  );

  roleUser.associate = (models) => {
    roleUser.hasMany(models.user, { foreignKey: 'role_id', as: 'user' });
  };

  return roleUser;
};

module.exports = roleUserModel;
