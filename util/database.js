const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment5','root','omkar',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;