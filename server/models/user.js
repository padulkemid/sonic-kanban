'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {
    //
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Email tidak boleh kosong!',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password tidak boleh kosong!',
          },
        },
      },
    },
    { sequelize }
  );

  User.addHook('afterValidate', async (user, options) => {
    const newPassword = await hashPassword(user.password);
    user.password = newPassword;
  });

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};

