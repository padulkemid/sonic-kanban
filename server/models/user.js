'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Email tidak boleh kosong!',
          },
          isEmail: {
            msg: 'Input harus berupa email!',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Password tidak boleh kosong!',
          },
        },
      },
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Hacktiv8',
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Organization tidak boleh kosong!',
          },
        },
      },
    },
    { sequelize }
  );

  User.addHook('afterValidate', async (user, options) => {
    const newPassword = await hashPassword(user.password);

    user.password = newPassword;
    user.organization = 'Hacktiv8';
  });

  User.associate = function (models) {
    User.hasMany(models.Task);
  };

  return User;
};
