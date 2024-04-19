document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('bookingForm');
    const bookingList = document.getElementById('bookingList');

    //create 
    form.addEventListener('submit',async (event)=>{
        event.preventDefault();

        
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const displayElement = {name,phone,email}
        displayBooking(displayElement);

        try{
            const response= await axios.post('/bookings',{name,phone,email});
            
            if(!response.data.success){
                throw new Error(response.data.error);
            }
            
            
        }catch(error){
            console.error(error);
        }
    });

    //read 
    async function fetchBookings(){
        try{
            const response = await axios.get('/bookings');
            
            const bookings = response.data;

            if(bookings && bookings.length >0){
                bookings.forEach(booking =>displayBooking(booking));
            }else{
                console.log("No Bookings Found");
            }


        }catch(error){
            console.log(error);
        }
    }

    function displayBooking(booking){
        const bookingItem=document.createElement('div');
        bookingItem.textContent=`${booking.name},${booking.phone},${booking.email}`;
        bookingList.appendChild(bookingItem);
        const deleteBtn=document.createElement('button');
        deleteBtn.setAttribute('data-id', booking.id);
        deleteBtn.appendChild(document.createTextNode('Delete'));
        bookingList.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', async () => {
            try {
                const response = await axios.delete(`/bookings/${booking.id}`);
                if (response.data.success) {
                    // Remove booking item from UI
                    bookingItem.remove();
                    deleteBtn.remove();
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });

        
    }
    fetchBookings();
});