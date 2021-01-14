const express = require('express');
const DiscussionController = require('./discussion.controller');

const router = express.Router();

router.get('/', DiscussionController.getAllAction);
router.get('/:title', DiscussionController.getByTitleAction);

router.put('/:id([0-9]+)', DiscussionController.updateAction);

router.post('/create', DiscussionController.createAction);


module.exports = router;