const Sequelize = require('sequelize');
const db = require('../util/database');

const PayerType = db.define('payerType', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: Sequelize.STRING,
    name: Sequelize.STRING,
    status: Sequelize.BOOLEAN
});

module.exports = PayerType;