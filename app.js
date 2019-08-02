const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

var Pusher = require('pusher');

const app = express();

app.use(logger('dev'));
const channels_client = new Pusher({
  appId: '833869',
  key: '28a7c26683f91b08877d',
  secret: '05f8ef1c094aa75aa4c1',
  cluster: 'ap2',
  encrypted: true
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
  })
);
export { app, channels_client };
