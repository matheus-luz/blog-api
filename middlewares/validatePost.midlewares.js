const { Categorie } = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400)
    .json({ message: '"title" is required' });
  }
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  
  if (!content) {
    return res.status(400)
    .json({ message: '"content" is required' });
  }

  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400)
    .json({ message: '"categoryIds" is required' });
  }

  const categories = await Categorie.findAll();
  const registeredIds = categories.map((cate) => cate.id);
  const idExist = categoryIds.filter((categId) => registeredIds.includes(categId));

  if (!idExist) return res.status(400).json({ error: '"categoryIs" not found' });

  next();
};

module.exports = [
  validateTitle,
  validateContent,
  validateCategoryIds,
];
