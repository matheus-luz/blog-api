const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
  
    req.tokenData = verifyToken;
  
    next();
  } catch (error) {
    next(error);
  }
};