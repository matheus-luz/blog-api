const express = require('express');
const { create } = require('../controllers/login.controllers');
const validateLogin = require('../middlewares/validateLogin.middlewares');

const router = express.Router();

router.post(
  '/',
  validateLogin,
  create,
);

module.exports = router;