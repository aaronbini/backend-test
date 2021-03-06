function errorHandler (err, req, res, next) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(405).send({error: 'That action is not supported here.'})
  } else {
    res.status(err.status || 500).send({error: err.message || err.error || err});
  }
};

module.exports = errorHandler;
