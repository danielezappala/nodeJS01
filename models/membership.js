const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Membership = sequelize.define('membership',
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    m_type:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

})

module.exports = Membership;