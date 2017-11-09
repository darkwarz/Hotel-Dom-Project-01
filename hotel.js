
var hotel = { name: 'Biltmore',                                                                             
  rooms: 500,                                                                                   
  roomsBooked: 150,                                                                             
  roomService: 'yes',                                                                           
  pool: 'Yes',                                                                                  
  gym: 'Yes',                                                                                   
  businessOffice: 'Yes',                                                                        
  
 roomsAvail: function() {
      return this.rooms - this.roomsBooked;
  }
} 

function button() {


document.getElementById("hotelname").innerHTML = hotel.name;
document.getElementById("totalRooms").innerHTML = hotel.rooms;
document.getElementById("roomsAvailable").innerHTML = hotel.roomsAvail();
 
 
 
}   


//document.getElementById("hotelname").innerHTML = "Biltmore";
//document.getElementById("totalRooms").innerHTML = "500";
//document.getElementById("roomsAvailable").innerHTML = "350";
 