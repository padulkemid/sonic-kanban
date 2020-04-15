const { User } = require('../models');
const { decryptPassword } = require('../helpers/bcrypt');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

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

  static async google(req, res, next) {
    const token = req.body.id_token;
    let data = {};
    let userData = null;
    let googleDataNotCreated = null;

    client
      .verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT,
      })
      .then((res) => {
        const user = res.getPayload();

        data.email = user['email'];
        data.password = 'cenahheeh123';

        return User.findOne({
          where: {
            email: data.email,
            organization: 'Hacktiv8',
          },
        });
      })
      .then((newData) => {
        if (!newData) {
          return User.create(data);
        } else {
          userData = newData;
          const decrypt = decryptPassword(data.password, newData.password);
          return decrypt;
        }
      })
      .then((decrypted) => {
        if (decrypted == true) {
          const token = jwt.sign(
            {
              UserId: userData.id,
              organization: userData.organization,
            },
            process.env.JWT_SECRET
          );
          res.status(200).json({ status: 200, message: 'Successfully logged in!', token });
        } else {
          return User.findOne({
            where: {
              email: data.email,
              organization: 'Hacktiv8',
            },
          });
        }
      })
      .then((newestData) => {
        googleDataNotCreated = newestData;
        const decrypt = decryptPassword(data.password, newestData.password);
        return decrypt;
      })
      .then((secondDecrypt) => {
        if (secondDecrypt == true) {
          const token = jwt.sign(
            {
              UserId: googleDataNotCreated.id,
              organization: googleDataNotCreated.organization,
            },
            process.env.JWT_SECRET
          );
          res.status(200).json({ status: 200, message: 'Successfully logged in!', token });
        } else {
          throw new Error('Internal server error!');
        }
      })
      .catch(next);
  }
}

module.exports = UserController;
