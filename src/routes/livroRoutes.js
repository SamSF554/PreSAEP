const express = require('express')
const router = express.Router()
const {cadastrar, listar} = require('../controllers/livroController')
const auth = require('../middlewares/auth')

router.post('/livros', auth, cadastrar)
router.post('/livros', auth, listar)

module.exports = router