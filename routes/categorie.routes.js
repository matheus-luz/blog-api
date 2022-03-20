const express = require('express');
const { create, categoriesAll } = require('../controllers/categories.controllers');
const auth = require('../middlewares/jwt.middlewares');

const router = express.Router();

router.get(
  '/',
  auth,
  categoriesAll,
);

router.post(
  '/',
  auth,
  create,
);

module.exports = router;