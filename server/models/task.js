'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {}

  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Title tidak boleh kosong!',
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Category tidak boleh kosong!',
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          isInt: true,
          notEmpty: {
            msg: 'UserId tidak boleh kosong!',
          },
        },
      },
    },
    { sequelize }
  );

  Task.associate = function (models) {
    Task.belongsTo(models.User);
  };
  return Task;
};
