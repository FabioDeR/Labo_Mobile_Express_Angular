const express = require('express');
const MessageController = require('./message.controller');

const router = express.Router();

router.get('/', MessageController.getAllAction);

router.put('/:id([0-9]+)', MessageController.updateAction);

router.post('/create/:UserId([0-9]+)/:DiscussionId([0-9]+)', MessageController.createAction);


module.exports = router;