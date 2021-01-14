const {Model} = require('sequelize');

module.exports = function(sequelize, Datatypes){

    class Role extends Model{
        static associations(models){
            Role.belongsToMany(models.Users, {through:'User_Roles'});
        }
    }

    Role.init({
        name: {type: Datatypes.STRING, allowNull: false, unique: true},
    }, {
        sequelize, 
        modelName: "Role"
    })
    return Role;
}