const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cors = require('cors');
const jwt = require('express-jwt');

const config = require('./config');

const register = require('./api/register');
const login = require('./api/login');


MongoClient.connect(config.mongodb, {useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  
  const db = client.db( config.db );

  app.use(bodyParser.json()); // for parsing application/json
  app.use(cors());
  

  //authentication
  app.use(jwt({ secret: config.secret }).unless({path: [
      '/api/login',
      '/api/register'
    ]}));


  app.listen(config.port, () => console.log(`Weight Loss api listening on port ${config.port}!`))


  register.post(app, db);
  login.post(app, db);


});




