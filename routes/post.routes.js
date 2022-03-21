const express = require('express');
const { postAll, create } = require('../controllers/post.controllers');
const validatePost = require('../middlewares/validatePost.midlewares');
const auth = require('../middlewares/jwt.middlewares');

const router = express.Router();

router.get(
  '/',
  auth,
  postAll,
);

router.post(
  '/',
  auth,
  validatePost,
  create,
);

module.exports = router;