const express = require('express');
const app = express();
const path = require('path');

const errorHandler = require('./errorHandler');
const notFound = require('./notFound');

const images = require('./routes/images');

app.use('/images', images);

app.use(errorHandler);

app.use(notFound);

module.exports = app;
