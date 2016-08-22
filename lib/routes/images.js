const express = require('express');
const router = express.Router();
const parser = require('body-parser').json();
const Image = require('../models/image-model');

//trying to get Travis to run
router.get('/', (req, res, next) => {
  Image.find({})
    .select('-__v -createdAt -updatedAt')
    .then(images => {
      res.send(images);
    })
    .catch(next);
})
.post('/', parser, (req, res, next) => {
  new Image(req.body).save()
    .then(saved => {
      res.send(saved);
    })
    .catch(next);
});

module.exports = router;
