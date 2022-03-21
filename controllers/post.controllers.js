const { BlogPost, User, Categorie } = require('../models');

const postAll = async (req, res, _next) => {
  const posts = await BlogPost.findAll({
    include: 
    [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Categorie,
        as: 'categories',
      },
    ],
  });

  return res.status(200).json(posts);
};

const create = async (req, res, _next) => {
  const { title, content } = req.body;
  const { id } = req.tokenData;

  const published = new Date().toString();
  const updated = new Date().toString();

  const newPost = await BlogPost
    .create({ title, content, userId: id, published, updated });

  return res.status(201)
  .json({ id: newPost.id, userId: id, title, content });
};

module.exports = {
  postAll,
  create,
};