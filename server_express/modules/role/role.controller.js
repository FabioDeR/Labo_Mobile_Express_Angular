const express = require('express');
const db = require('../../models');

class RoleController{

    async getAllAction(req, res){
        db.Roles.findAll()
        .then(async data => {
            //console.log(data); 
            res.json({role: data});
        }).catch(err => res.json(err));
    }

    createAction({body}, response){
        db.Roles.create({...body})
            .then(data => response(203).json(data))
            .catch(error => response.json(error));
    }

    async updateAction({params : {id} , body}, response){
        const role = await db.Roles.findByPk(id);
        role.update({...body})
            .then(updatedRole => response.json(updatedRole))
            .catch(error => response.json(error));
    }

    async deleteAction({params : {id}}, response){
        const role = await db.Roles.findByPk(id);
        role.destroy()
            .then(data => response.json(data))
            .catch(error => response.json(error));
    }
}

module.exports = new RoleController();