const express = require('express');
const app = express();
const path = require('path');

const errorHandler = require('./errorHandler');
const notFound = require('./notFound');

const images = require('./routes/images');

app.use('/images', images);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
