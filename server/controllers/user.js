const { User } = require('../models');
const { decryptPassword } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  static create(req, res, next) {
    const newData = req.body;

    User.create(newData)
      .then((success) => {
        res.status(201).json({ status: 201, message: 'Successfully created new User!' });
      })
      .catch(next);
  }

  static async read(req, res, next) {
    const loggedData = req.body;
    const organization = 'Hacktiv8';
    let userData = null;

    User.findOne({
      where: {
        email: loggedData.email,
        organization,
      },
    })
      .then((user) => {
        userData = user;
        if (!user) {
          throw new Error('User not found!');
        } else {
          const decrypt = decryptPassword(loggedData.password, userData.password);

          return decrypt;
        }
      })
      .then((decrypted) => {
        if (!decrypted) {
          throw new Error('Wrong password!');
        } else {
          const token = jwt.sign(
            {
              UserId: userData.id,
              organization: userData.organization,
            },
            process.env.JWT_SECRET
          );

          res.status(200).json({ status: 200, token, message: 'Successfully logged in!' });
        }
      })
      .catch(next);
  }
}

module.exports = UserController;
