const AppCategoryModel = (sequelize, DataTypes) => {
  const appcategory = sequelize.define(
    'app_category',
    {

      id_category: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name_category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'app_category',
    },
  );

  appcategory.associate = (models) => {
    appcategory.hasMany(models.CredentialModel, { foreignKey: 'category_id', as: 'credential' });
  };

  return appcategory;
};

module.exports = AppCategoryModel;
