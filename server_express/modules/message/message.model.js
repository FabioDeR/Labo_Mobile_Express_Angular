const {Model} = require('sequelize');

module.exports = function(sequelize, Datatypes){
    class Message extends Model{
        static associates(models){
            Message.belongsTo(models.Discussions);
            Message.belongsTo(models.Users);
        }
    }

    Message.init({
        content: {type: Datatypes.STRING, allowNull: false},
        isActive: {type: Datatypes.BOOLEAN, allowNull: false}
    }, {
        sequelize,
        modelName: "Messages"
    });

    Message.addHook("beforeValidate", (model, options) => {
        if (model.isActive == null) {
            model.isActive = true;
        }
    })

    return Message;
}