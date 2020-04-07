const { Task, User } = require('../models');

class TaskController {
  static create(req, res, next) {
    const newData = req.body;
    const UserId = req.UserId;

    const struct = {
      title: newData.title,
      category: newData.category,
      UserId,
    };

    Task.create(struct)
      .then((success) => {
        res.status(201).json({ status: 201, message: 'Task successfully inserted!' });
      })
      .catch(next);
  }

  static read(req, res, next) {
    const organization = req.Organization;

    Task.findAll({
      include: [
        {
          model: User,
          where: {
            organization,
          },
        },
      ],
    })
      .then((tasks) => {
        res.status(200).json({ status: 200, tasks });
      })
      .catch(next);
  }

  static readById(req, res, next) {
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
        }
        res.status(200).json({ status: 200, task });
      })
      .catch(next);
  }

  static update(req, res, next) {
    const id = req.params.id;
    const UserId = req.UserId;

    const newData = req.body;

    const struct = {
      title: newData.title,
      category: newData.category,
      UserId,
    };

    Task.update(struct, {
      where: {
        id,
        UserId,
      },
    })
      .then((success) => {
        if (!success) {
          throw new Error('Task not found!');
        } else {
          res.status(201).json({ status: 201, message: 'Task updated successfully!' });
        }
      })
      .catch(next);
  }

  static delete(req, res, next) {
    const id = req.params.id;
    const UserId = req.UserId;

    Task.destroy({
      where: {
        id,
        UserId,
      },
    })
      .then((deleted) => {
        if (!deleted) {
          throw new Error('Task not found!');
        } else {
          res.status(201).json({ status: 201, message: 'Task deleted successfully!' });
        }
      })
      .catch(next);
  }
}

module.exports = TaskController;
