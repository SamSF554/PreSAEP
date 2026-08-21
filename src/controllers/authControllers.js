const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

async function login(req, res) {
    try {
        const { email, senha } = req.body
//pega o email e a senha que o usuario digitou no formulario de login

        const usuario = await Usuario.findOne({ where: { email } })
        if (!usuario) {
            return res.status(401).json({ mensagem: 'Email ou senha inválidos' })
        }
//procura no banco de dados um único usuario que tenha aquele email, se não encontrar retorna uma mensagem de erro.

        const senhaConfere = await bycrypt.compare(senha, usuario.senha)
        if (!senhaConfere) {
            return res.status(401).json({ mensagem: 'Email ou senha inválidos' })
        }
//compara a senha que o usuario digiou agora com a senha 

const token = jwt.sign(
    {
        id: usuario.id,tipo : usuario.tipo
    },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
        
)

    res.json({ token })
    } catch (erro) {
        res.status(500).json(
            {

                mensagem: 'Erro ao fazer login',
                erro: erro.message,
            }
        )
    }
}

module.exports = { login }
