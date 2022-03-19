module.exports = (sequelize) => {
  const PostCategorie = sequelize.define('PostCategorie', 
    {},
    {
      underscored: true,
      timestamps: false,
      tableName: 'PostsCategories',
    });

  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Categorie,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategorie, as: 'posts' },
    );

    models.Categorie.belongsToMany(
      models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategorie, as: 'categories' },
    );
  };

  return PostCategorie;
};