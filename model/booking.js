const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = require('../util/database');

const Booking = sequelize.define('Booking',{
    name:{  
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
});

module.exports=Booking;