const { User } = require('../models');
const jwtGenerate = require('../auth/jwtGenerate');

const create = async (req, res) => {
  const { email, password } = req.body;

  const alreadyExists = await User.findOne({ where: { email } });

  if (!alreadyExists) return res.status(400).json({ message: 'Invalid fields' });

  const token = await jwtGenerate({ id: alreadyExists.id, data: email });

  return res.status(200).json({ token });
};

module.exports = {
  create,
};