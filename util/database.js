const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'payers',
    'admin',
    'admin123',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

module.exports = sequelize;