import React from 'react'


const hotels = [
    {
      name: 'Hotel Palazzo Montemartini Rome, A Radisson Collection Hotel',
      location: 'Largo Giovanni Montemartini, 20',
      description: 'Internet - Free WiFi Entertainment - 42-inch plasma TV with premium channels and pay movies. Food & Drink - 24-hour room service, minibar, and dining table. Sleep - Memory foam bed, Egyptian cotton linen.',
      nights: '1 night',
      city: 'Rome',
      price: '63.07',
      imageUrl: '../images/HotelPlazo.jpg', 
    },
    {
      name: 'Hyatt Regency Dubai',
      location: 'Dera Corniche Alkhaleej Road',
      description: '2 twin beds layout-Seperate living room Internet- Free wifi, 42 inch lcd tv, premium channels ',
      nights: '2 nights',
      city: 'Paris',
      price: '80.00',
      imageUrl: '../images/HyattDubai.jpg', 
    },

  ];


const searchHotels = () => {
  return (
    <>
     <div className="hotel-list">
      {hotels.map((hotel, index) => (
        <div className="hotel-container" key={index}>
          <div className="hotel-card">
            {/* Hotel Image */}
            <div className="hotel-image">
              <img src={hotel.imageUrl} alt={hotel.name} />
            </div>
            
            {/* Hotel Details */}
            <div className="hotel-details">
              <h2>{hotel.name}</h2>
              <p><i className="bi bi-geo-alt"></i> {hotel.location}</p>
              <p>{hotel.description}</p>
              
              <div className="hotel-info">
                <p>{hotel.nights} | {hotel.city}</p>
                <p className="price">Price from <strong>${hotel.price}</strong></p>
              </div>

              <button className="book-now-btn">BOOK NOW</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default searchHotels