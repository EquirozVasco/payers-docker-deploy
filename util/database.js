const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'payers',
    'payersuser',
    'YZpgXPMws4PwLgOdUdwrbSxjglOIhblK',
    {
        host: 'dpg-cjn26lcdfrcc73dh3i60-a',
        dialect: 'postgres',
    }
);

module.exports = sequelize;