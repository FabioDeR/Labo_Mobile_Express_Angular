const express = require("express");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const accessTokenSecret = "test123";

class UserController {
  async getByCredentials({ body }, response) {
    await db.Users.findOne({
      where: { email: body.email, password: body.password },
    })
      .then(async (data) => {
        // response.json({user : data});
        if (data != null) {
          const accessToken = jwt.sign(
            { email: data.email, role: data.role },
            accessTokenSecret
          );
          response.json({
            User: data,
            token: accessToken,
          });
        } else {
          response.json("NOOOOT OOOKKKK !!! HAAAAA");
        }
      })
      .catch((err) => response.json(err));
  }

  async getAllAction(request, response) {
    //console.log(db);
    db.Users.findAll({ includes: "Roles" })
      .then(async (data) => {
        //console.log(data);
        response.json({ user: data });
      })
      .catch((err) => response.json(err));
  }

  getByUsername({ params: { username } }, response) {
    db.Users.findOne({ where: { username } })
      .then(async (data) => {
        //console.log(data);
        response.json({ user: data });
      })
      .catch((err) => response.json(err));
  }

  getRolesByUserId({ params: { id } }, response) {
    db.Users.finByPk(id, { includes: ["Roles"] })
      .then(async (data) => {
        response.json(data.Roles);
      })
      .catch((err) => response.json(err));
  }

  createAction({ body }, response) {
    //console.log(body);
    db.Users.create({ ...body })
      //203 because the instance is changed (gained an id, isActive, etc.)
      .then((user) => response(203).json(user))
      .catch((err) => response.json(err));
  }

  //Async + await = mode bloquant.
  async updateAction({ params: { id }, body }, response) {
    const user = await db.Users.findByPk(id);
    user.update({ ...body }).then((updateUser) => response.json(updateUser));
  }

  async addRolesToUserAction({ params: { userId, roleId }, body }, response) {
    const user = await db.Users.findByPk(userId);
    const role = await db.Roles.findByPk(roleId);
    //express creéer la méthode addRole which create a new instance on User_Roles
    user.addRole(role.id).then((user) => response.json(user));
  }

  //TODO: GetAllMessagesByUserId() = historic
  //TODO: in a true forum, you would probably make a copy of each message and save them in a table linked to this user specific.
}

module.exports = new UserController();
