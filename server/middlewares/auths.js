const { Task, User } = require('../models');
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new Error('Token not found!');
    } else {
      req.Organization = decoded.organization;
      req.UserId = decoded.UserId;
      next();
    }
  });
};

const authorization = (req, res, next) => {
  const id = req.params.id;
  const UserId = req.UserId;
  const organization = req.Organization;

  Task.findOne({
    where: {
      id,
      UserId,
    },
    include: [
      {
        model: User,
        where: {
          organization,
        },
      },
    ],
  })
    .then((task) => {
      if (!task) {
        throw new Error('Task not found!');
      } else {
        if (req.UserId == task.UserId) {
          res.status(200).json({ status: 200, message: 'Permission granted!' });
          next();
        } else {
          throw new Error('Access denied!');
        }
      }
    })
    .catch(next);
};

module.exports = {
  authentication,
  authorization,
};
