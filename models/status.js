const StatusModel = (sequelize, DataTypes) => {
  const status = sequelize.define(
    'status',
    {

      id_status: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'status',
    },
  );

   status.associate = (models) => {
    /*status.hasMany(models.CredentialModel, { foreignKey: 'status_id', as: 'credential' });*/
    status.hasMany(models.UserModel, { foreignKey: 'status_id', as: 'user' });
  }; 

  return status;
};

module.exports = StatusModel;
