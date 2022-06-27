'use strict'

// requirements for server
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// implement express
const app = express();

// middleware
app.use(cors());

// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
})

app.get('*', (request, response) => {
  response.status(404).send('Not availabe');
})

// error
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
