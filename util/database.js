const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'payers',
    'postgres',
    'admin123',
    {
        host: 'postgres',
        dialect: 'postgres',
    }
);

module.exports = sequelize;