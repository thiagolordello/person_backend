const ManagerModel = (sequelize, DataTypes) => {
  const manager = sequelize.define(
    'manager',
    {

      id_manager: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name_manager: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'manager',
    },
  );

  manager.associate = (models) => {
    manager.hasMany(models.user, { foreignKey: 'manager_id', as: 'user' });
  };

  return manager;
};

module.exports = ManagerModel;
