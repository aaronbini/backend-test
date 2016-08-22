const Image = require('../lib/models/image-model');
const assert = require('chai').assert;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

describe('image model', () => {

  it('requires a title', done => {
    const image = new Image({url: 'http://website.org/images/image1.png', caption: 'Wow, what a picture!'});
    image.validate().then(() => {
      done('why no error here?');
    }).catch((err) => {
      done();
    });
  });

});
