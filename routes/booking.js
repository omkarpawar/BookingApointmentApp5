const express = require('express');
const Booking = require('../model/booking');
const router = express.Router();



router.get('/',async(req,res)=>{
    try{
        const booking = await Booking.findAll();
        res.json(booking)


    }catch(error){
        console.error(error);
    }
})

router.post('/',async (req,res)=>{
    try{
        const{name,phone,email}=req.body;
        const booking = await Booking.create({name,phone,email});
    }catch(error){
        console.log(error);
    } 
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ success: false, error: 'Booking not found' });
        }
        await booking.destroy();
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});


module.exports=router;
