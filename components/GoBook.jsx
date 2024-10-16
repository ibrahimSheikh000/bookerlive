import React from 'react'
import '../css/GoBook.css'

const GoBook = () => {
  return (
    <div className="hero-section d-flex flex-column justify-content-between" 
      style={{ 
        backgroundImage: 'url(/images/01.jpg)', 
        backgroundSize: 'cover', 
        minHeight: '80vh', 
        backgroundPosition: 'center' 
      }}>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 hero-content">
            <h1 className="display-4">
              <span className="text-go">Go</span> <span className="text-book">book</span>
            </h1>
            <h1 className='display-4'>
              <span className="text-with">with</span> <span className="text-booker">Booker</span><span className="text-live">Live</span>
            </h1>
            <p className="lead">Visit Europe, America, Asia, Africa or beyond!!</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 booking-options mb-4">
            <h3 className="options">
              <span className="text-hotels">Hotels</span>
              <span className="text-o"> | </span>
              <span className="text-flights">Flights</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoBook