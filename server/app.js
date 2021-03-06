const path = require('path');
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser-graphql');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const passport = require('passport')
const jwt = require('express-jwt')
// const jsonwebtoken = require('jsonwebtoken')

const schema = require('./schema.js');
const models = require('./models/index.js')

const PORT = process.env.NODE_ENV === 'production' ? 5000 : 9000;


// Create an express server
var app = express();
app.use(compression());
app.use(bodyParser.graphql());

// load passport strategies
// app.use(passport.initialize());
// const { localSignUpStrategy } = require('./passport/signup_passport');
// passport.use('local-signup', localSignUpStrategy);

// view engine setup: static file
app.use(express.static(path.join(__dirname, '..','build')));


const auth = jwt({
    secret: 'test',
    credentialsRequired: false
})

// Cors region
app.use(cors())

function startApp(port) {
    app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/api`));
}
// 同步模型到数据库中
models.sequelize.sync()
    .then(() => {
        startApp(PORT);
    })
    .catch((e) => {
        throw new Error(e);
    });

// Create GraphQL endpoint: api
app.use('/api', bodyParser.graphql(), auth, graphqlHTTP(req => ({
    schema: schema,
    graphiql: process.env.NODE_ENV !== 'production',
    pretty : true,
    context: {
        user: req.user
    }
})));

app.use(function(req, res, next) {
    res.status(404);
  });

module.exports = app;

