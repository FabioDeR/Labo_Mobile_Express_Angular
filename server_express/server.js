const db = require('./models');
//TODO: How to connect to an database server (other than sqlite)


const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'test123';
const { RoleRouter } = require('./modules/role');
const { UserRouter } = require('./modules/user');
const { DiscussionRouter } = require('./modules/discussion');
const { MessageRouter } = require('./modules/message');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.use('/users', UserRouter);
app.use("/roles", RoleRouter);
app.use("/discussions", DiscussionRouter);
app.use("/messages", MessageRouter);

db.sequelize.sync().then(()=> console.log('databasesync'))
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});