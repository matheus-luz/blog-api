const { User } = require('../models');
const jwtGenerate = require('../auth/jwtGenerate');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  // if (!user) return res.status(400).json({ message: 'Invalid body syntax' });

  const alreadyExists = await User.findOne({ where: { email } });

  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });

  const newUser = await User.create({ displayName, email, password, image });

  const token = await jwtGenerate({ id: newUser.id, data: email });

  return res.status(201).json({ token });
};

module.exports = {
  create,
};