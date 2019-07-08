const compression = require('compression');
var express = require('express');
const bodyParser = require('body-parser-graphql');
const cors = require('cors');
var graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const models = require('./models/index.js')

const PORT = process.env.NODE_ENV === 'production' ? 5000 : 9000;


// Create an express server and a GraphQL endpoint
var app = express();
app.use(compression());
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

app.use(bodyParser.graphql());


app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== 'production',
    pretty : true    
}));

module.exports = app;

