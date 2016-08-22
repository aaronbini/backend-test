function notFound (req, res) {
  res.status(404).send({error: `${req.url} does not exist`, status: 404});
};

module.exports = notFound;
