const express = require('express');
const { usersAll, create } = require('../controllers/user.controllers');
const auth = require('../middlewares/jwt.middlewares');
const validateUser = require('../middlewares/validateUser.middlewares');

const router = express.Router();

router.post(
  '/',
  validateUser,
  create,
);

router.get(
  '/',
  auth,
  usersAll,
);

module.exports = router;