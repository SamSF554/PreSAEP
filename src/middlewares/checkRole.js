function permitir(...tiposPermitidos) {
  return (req, res, next) => {
    if (!tiposPermitidos.includes(req.usuario.tipo)) {
      return res.status(403).json({ message: 'Você não possui tal permissão para prosseguir' });
    }
    next();
  };
}

module.exports = permitir;