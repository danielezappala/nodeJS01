const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('customer',{
    id:{
        type: Sequelize.INTEGER,
        autoincrement: null,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cognome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports.Customer;