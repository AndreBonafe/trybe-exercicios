module.exports = (err, req, res, next) => {
  res.status(500).send({ message: 'erro na logica do servidor' });
};