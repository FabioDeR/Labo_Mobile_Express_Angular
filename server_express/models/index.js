const {Sequelize, DataTypes} = require("sequelize");

const path = require('path');

const db = {};
let sequelize = new Sequelize({dialect: 'sqlite', storage: path.join(__dirname, '..', 'db', 'db.sqlite3')});
//console.log(__dirname);
db['Users'] = require("../modules/user/user.model")(sequelize, DataTypes);

db['Roles'] = require("../modules/role/role.model")(sequelize, DataTypes);

db['Messages'] = require('../modules/message/message.model')(sequelize, DataTypes);
db['Discussions'] = require('../modules/discussion/discussion.model')(sequelize, DataTypes);


Object.keys(db).forEach(model => {
    // console.log(model, db[model], db[model].associate); 
    console.log(model);
    if(db[model].associate){
        db[model].associate(db);
    }
})


db['sequelize'] = sequelize; //Instance de sequelize
db['Sequelize'] = Sequelize; //Le type Sequelize
// console.log(db);
module.exports = db;