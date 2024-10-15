import React from 'react'
import '../css/GoBook.css'
const GoBook = () => {
  return (
    <>
   <div className="hero-section d-flex align-items-center justify-content-center text-center" 
     style={{ 
       backgroundImage: 'url(/images/01.jpg', 
       backgroundSize: 'cover', 
       height: '100vh', 
       backgroundPosition: 'center' 
     }}>
      
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="display-4">
          <span className="text-go">Go</span> <span className="text-book">book</span>
        </h1>
        <h1 className='display-4'><span className="text-with"> with </span><span className="text-booker">Booker</span><span className="text-live">Live</span></h1>
        <p className="lead">Visit Europe, America, Asia, Africa or beyond!!</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 col-md-3 mx-auto">
        <h3><span className="text-hotels"> Hotels</span><span className="text-o"> | </span><span className="text-flights">Flights</span></h3>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default GoBook