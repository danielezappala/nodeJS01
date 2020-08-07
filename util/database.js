const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize('test_nodejs','root','Scenario_2020',{
//     dialect:'mysql', 
//     host:'localhost',
//     port:'3306'
// });

const sequelize = new Sequelize('test_nodejs','root','Scenario_2020',{
    dialect:'mysql', 
    host:'localhost',
    port:'3306'
});

module.exports = sequelize;
