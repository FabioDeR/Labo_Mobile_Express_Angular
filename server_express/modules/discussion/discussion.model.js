const {Model} = require('sequelize');

module.exports = function(sequelize, Datatypes){
    class Discussion extends Model{
        static associate(models){
            Discussion.hasMany(models.Messages);
            Discussion.belongsTo(models.Users)
        }
    }

    Discussion.init({
        title: {type: Datatypes.STRING, allowNull: false},
        subject: {type: Datatypes.STRING, allowNull: true},
        isActive: {type: Datatypes.BOOLEAN, allowNull: false}
    }, {
        sequelize,
        modelName: "Discussions"
    })

    //TODO: check if json can return camp null ?
    Discussion.addHook("beforeValidate", (model, options)=>{
        if(model.subject == null){
            model.subject = '';
        }
    });

    Discussion.addHook("beforeValidate", (model, options)=>{
        if(model.isActive == null){
            model.isActive = true;
        }
    });

    return Discussion;
}