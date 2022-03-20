const { User } = require('../models');
const jwtGenerate = require('../auth/jwtGenerate');

const usersAll = async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return res.status(200).json(users);
};

const userId = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  const { displayName, email, image } = user;

  return res.status(200).json({ id: user.id, displayName, email, image });
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const alreadyExists = await User.findOne({ where: { email } });

  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });

  const newUser = await User.create({ displayName, email, password, image });

  const token = await jwtGenerate({ id: newUser.id, data: email });

  return res.status(201).json({ token });
};

module.exports = {
  usersAll,
  userId,
  create,
};