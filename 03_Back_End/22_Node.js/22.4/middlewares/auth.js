module.exports =  (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization !== 'senha') {
    return res.status(401).send({ message: 'usuário não autorizado para a operação.' });
  }

  next();
}