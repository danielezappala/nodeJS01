const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('customer',
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Customer.fullname = function () {
    return this.name + ' ' + this.surname
    }

module.exports = Customer;