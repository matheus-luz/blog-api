const express = require('express');
const { create } = require('../controllers/categories.controllers');
const auth = require('../middlewares/jwt.middlewares');

const router = express.Router();

router.post(
  '/',
  auth,
  create,
);

module.exports = router;