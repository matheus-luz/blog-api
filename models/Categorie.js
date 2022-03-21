module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Categories',
    timestamps: false,
  });

  return Categorie;
};
