const bcrypt = require('bcryptjs');

const criptografarSenha = async (senhaPlana) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(senhaPlana, salt);
  return hash;
};

module.exports = { criptografarSenha };
