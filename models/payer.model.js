const Sequelize = require('sequelize');
const db = require('../util/database');
const PayerType = require('../models/payer-type.model')

const Payer = db.define('payer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    status: Sequelize.BOOLEAN,
    payerTypeId: Sequelize.INTEGER
});

Payer.belongsTo(PayerType, { foreignKey: 'payerTypeId', as: 'payerType' });

module.exports = Payer;