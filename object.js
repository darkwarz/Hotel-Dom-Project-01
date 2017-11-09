
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


  //create a webpage h1 site for biltmore hotel
  //rooms
  //business office
  //gym
  //h1 and p tag
  //index.html file
  