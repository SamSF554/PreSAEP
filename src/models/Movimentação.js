const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')
const Livro = require('./Livro')

const Movimentacao = sequelize.define('Movimentacao', {
    tipo: {
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    data: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Livro.hasMany(Movimentacao, {foreignKey: 'livro_id'})

module.exports = Movimentacao