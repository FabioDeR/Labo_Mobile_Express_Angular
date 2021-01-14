const express = require('express');
const { Users } = require('../../models');
const db = require('../../models');

class DiscussionController{

    
    async getAllAction(request, response){
        db.Discussions.findAll({include: 'Messages'})
        .then( async data => {
            response.json(response.json(data))
        })
        .catch(error => response.json(error));
    }

    getByTitleAction({params: {title}}, response){
        db.Discussions.findOne({where : {title}})
        .then( async data => {
            response.json({discussion: data})
        })
        .catch(error => response.json(error));
    }

    // //Get one discussion messageS
    // getMessagesByDiscussionIdAction({params: {id}}, response){
    //     db.Discussions.findByPk(id, {include: ['Messages']})
    //     .then(async data => {
    //         response.json(data.Messages)
    //     })
    //     .catch(error => response.json(error));
    // }

    updateAction({params: {id}, body}, response){
        db.Discussions.update({where: {id}})
        .then(updateDiscussion => response.json(updateDiscussion))
        .catch(error => response.json(error));
    }

    createAction({body}, response){
        db.Discussions.create({...body})
        .then(discussion => response(203).json(discussion))
        .catch(error => response.json(error))
    }
}

module.exports = new DiscussionController();