const CompanyModel = (sequelize, DataTypes) => {
  const company = sequelize.define(
    'company',
    {

      id_company: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name_company: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'company',
    },
  );

  company.associate = (models) => {
    company.hasMany(models.User, { foreignKey: 'company_id', as: 'user' });
  };

  return company;
};

module.exports = CompanyModel;
