exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World....! from github-google-actions';
  res.status(200).send(message);
};
