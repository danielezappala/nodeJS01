const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_nodejs','root','Scenario_2020',{
    dialect:'mysql', 
    host:'localhost'
});

module.exports = sequelize;

/*
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'test_nodejs',
    password: 'Scenario_2020'
});

module.exports = pool.promise();
*/