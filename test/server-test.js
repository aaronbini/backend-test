const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('Images API', () => {

  const req = chai.request(app);

  const testImage = {title: 'Great Pic', url: '//imagePath/images/testImage.png', caption: 'Nice One!'};
  const testImage2 = {title: 'Great Pic2', url: '//imagePath/images/testImage2.png', caption: 'What a shot!'};


  it('POSTS an image', done => {
    req.post('/images')
      .send(testImage)
      .then((res) => {
        assert.ok(res.body._id);
        testMovie._id = res.body._id;
        done();
      })
      .catch(done);
  });

  it('GETS image', done => {
    req.get('/images')
      .then(res => {
        assert.ok(res.body);
        assert.deepEqual(res.body, testMovie);
        done();
      })
      .catch(done);
  });

  it('404s on bad route', done => {
    req.get('/images/failing')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('404s on unsupported HTTP verb', done => {
    req.put('/images')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });

  after((done) => {
    console.log('dropping db');
    connection.db.dropDatabase();
    connection.close(done);
  });

});
