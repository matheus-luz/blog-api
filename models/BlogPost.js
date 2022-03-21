const { DataTypes } = require('sequelize');

const attributes = {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published: DataTypes.STRING,
  updated: DataTypes.STRING,
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost',
    attributes,
    {
      underscored: false,
      tableName: 'BlogPosts',
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
    BlogPost.hasMany(models.Categorie,
     { foreignKey: 'id', as: 'categories' }); 
};

  return BlogPost;
};