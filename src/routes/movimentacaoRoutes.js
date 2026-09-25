const express = require('express')
const router = express.Router()
const movimentacao = require('../controllers/movimentacaoController')
const auth = require('../middlewares/auth')

router.post('/movimentacoes', auth, movimentacao.cadastrar)

module.exports = router 