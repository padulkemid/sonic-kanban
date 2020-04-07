const route = require('express').Router();
const { authentication, authorization } = require('../middlewares/auths');
const TaskController = require('../controllers/task');

// C reate
route.post('/', authentication, TaskController.create);

// R ead
route.get('/', authentication, TaskController.read);
route.get('/:id', authentication, authorization, TaskController.readById);

// U pdate
route.put('/:id', authentication, authorization, TaskController.update);

// D elete
route.delete('/:id', authentication, authorization, TaskController.delete);

module.exports = route;
