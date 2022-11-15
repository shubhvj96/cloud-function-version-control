/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  console.log("inside function");
  let message = req.query.message || req.body.message || 'Hello World! from github-gcp-actions...!';
  res.status(200).send(message);
};
