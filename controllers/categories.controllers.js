const { Categorie } = require('../models');

const create = async (req, res, _next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const categorie = await Categorie.create({ name });

  return res.status(201).json(categorie);
};

module.exports = {
  create,
};