module.exports = (req, res, next) => {
  return res.status(200).send({ message: 'Hello World!' });
}