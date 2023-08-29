const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'payers',
    'payersuser',
    'YZpgXPMws4PwLgOdUdwrbSxjglOIhblK',
    {
        host: 'postgres://payersuser:YZpgXPMws4PwLgOdUdwrbSxjglOIhblK@dpg-cjn26lcdfrcc73dh3i60-a/payers',
        dialect: 'postgres',
    }
);

module.exports = sequelize;