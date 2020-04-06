const bcrypt = require('bcrypt');

const hashPassword = async (pass) => {
  const hashed = await bcrypt.hash(pass, 10);
  return hashed;
};

const decryptPassword = async (loggedPass, dbPass) => {
  const decrypted = await bcrypt.compare(loggedPass, dbPass);
  return decrypted;
};

module.exports = {
  hashPassword,
  decryptPassword,
};
