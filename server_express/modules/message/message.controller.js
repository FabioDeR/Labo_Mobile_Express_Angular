const express = require('express');
const db = require('../../models');
const discussionModel = require('../discussion/discussion.model');

class MessageController{

    async getAllAction(request, response){
        db.Messages.findAll()
        .then(async data => {
            response.json({message: data});
        }).catch(err => response.json(err));
    }

    async createAction({params : {UserId, DiscussionId} , body}, response){
        const discussion = await db.Discussions.findByPk(DiscussionId);
        const user = await db.Users.findByPk(UserId);

        const message =  await db.Messages.create({...body, UserId: user.id, DiscussionId: discussion.id})
            .then(message => response(203).json(message))
            .catch(error => response.json(error));

        }

    //Async + await = mode bloquant.
    async updateAction({params: {id}, body}, response){
        const message = await db.Messages.findByPk(id);
        message.update({...body})
            .then(updateMessage => response.json(updateMessage));
    }
}


module.exports = new MessageController();