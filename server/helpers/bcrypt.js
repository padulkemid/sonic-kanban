const bcrypt = require('bcrypt');

const hashPassword = async (pass) => {
  const hashed = await bcrypt.hash(pass, 8);
  return hashed;
};

const decryptPassword = async (loginPass, dbPass) => {
  const decrypted = await bcrypt.compare(loginPass, dbPass);
  return decrypted;
};

module.exports = {
  hashPassword,
  decryptPassword,
};
