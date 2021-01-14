const {Model} = require('sequelize');

module.exports = function(sequelize, Datatypes){

    class User extends Model{
        static associate(models){
            //Lien entre les entités (One-to-One, One-to-Many, Many-to-Many) belongsTo, belongsToMany, hasMany
            User.belongsToMany(models.Roles, {through:'User_Roles'});
            User.hasMany(models.Discussions);
            User.hasMany(models.Messages);
        }
    }

    //Création des tables
    User.init({
        username: {type: Datatypes.STRING, allowNull: false, unique: true},
        password: {type: Datatypes.STRING, allowNull: false},
        email: {type: Datatypes.STRING, allowNull: false},
        avatar: {type: Datatypes.STRING, allowNull: false},
        lastname: {type: Datatypes.STRING, allowNull: false},
        firstname: {type: Datatypes.STRING, allowNull: false},
        isActive:{type: Datatypes.BOOLEAN, allowNull: false},
        count: {type: Datatypes.INTEGER, allowNull: true},
        //token: {type: Datatypes.STRING, allowNull:true}
    }, {
        sequelize, 
        modelName: "Users"
    })

    User.addHook("beforeValidate", (model, options)=>{
        if(model.isActive == null){
            model.isActive = true;
        }
    });

    User.addHook("beforeValidate", (model, options)=>{
        if(model.count == null){
            model.count = 0;
        }
    });

    return User;
}
