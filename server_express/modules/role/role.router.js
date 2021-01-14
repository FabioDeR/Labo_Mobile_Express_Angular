const express = require('express');
const RoleController = require('./role.controller');

const router = express.Router();

router.get('/', RoleController.getAllAction);

router.post('/create', RoleController.createAction);

router.put('/:id([0-9])', RoleController.updateAction);

router.delete('/:id([0-9])', RoleController.deleteAction);

module.exports = router;