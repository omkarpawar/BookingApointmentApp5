const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const bookingRoutes = require('./routes/booking');
const sequelize = require('./util/database');


app.use(bodyparser.json());
app.use(express.static('public'));
app.use('/bookings',bookingRoutes);


sequelize.sync().then(()=>{
    app.listen(3000);
}).catch(err=>console.log(err));


