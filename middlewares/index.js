const validateUser = require('./validateUser.middlewares');
const validateLogin = require('./validateLogin.middlewares');
const validatePost = require('./validatePost.midlewares');

module.exports = {
  validateUser,
  validateLogin,
  validatePost,
};