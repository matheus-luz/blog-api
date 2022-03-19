const express = require('express');
const { create } = require('../controllers/user.controllers');
// const jwtMiddleware = require('../middlewares/jwt.middlewares');
const validateUser = require('../middlewares/validateUser.middlewares');

const router = express.Router();

router.post(
  '/',
  validateUser,
  create,
);

module.exports = router;