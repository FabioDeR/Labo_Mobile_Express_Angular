const express = require('express');
const UserController = require('./user.controller');

const router = express.Router();

//console.log(UserController.getAllAction);
router.get('/', UserController.getAllAction);
router.get('/:id([0-9]+)/roles', UserController.getRolesByUserId);
router.post('/login', UserController.getByCredentials);
// router.get('/:id([0-9]+)/username', UserController.getRolesByUserId);

router.post('/create', UserController.createAction);

router.put('/:id([0-9]+)', UserController.updateAction);

router.patch('/:userId([0-9]+)/:roleId([0-9]+)', UserController.addRolesToUserAction);

module.exports = router;