import React, { useState } from 'react';
import '../css/tourPackages.css';

function TourPackages() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tourPackages = [
    {
      src: '/images/rome.jpg',
      alt: 'Rome',
      title: 'Rome to Naples and Amalfi Coast Adventure',
      location: 'Italy',
      days: '3 days & 2 nights',
      start: 'Rome',
      end: 'Naples',
      price: '$125.99',
    },
    {
      src: '/images/everest.jpg',
      alt: 'Everest',
      title: 'Everest Base Camp Trek through 3 High Passes',
      location: 'Nepal',
      days: '22 Days',
      start: 'Kathmandu',
      end: 'Khatmandu',
      price: '$125.99',
    },
    {
    src: '/images/vietnam.jpg',
    alt: 'Vietnam',
    title: '10 Days from the South to the North of Vietnam',
    location: 'Vietnam',
    days: '10 days & 9 nights',
    start: 'Hochimin',
    end: 'Hanoi',
    price: '$125.99',
  }, 
   {
    src: '/images/Adriatic.jpg',
    alt: 'Adriatic',
    title: 'Adriatic Adventure-Zagreb to Athens',
    location: 'Greece',
    days: '3 days & 2 nights',
    start: 'Zagreb',
    end: 'Athens',
    price: '$125.99',
  },
  {
    src: '/images/Asian.jpg',
    alt: 'Asian',
    title: 'Asian Adventure',
    location: '3 Countries',
    days: '14 Days',
    start: 'Bangkok',
    end: 'Hanoi',
    price: '$125.99',
  },
  {
    src: '/images/Costa.jpg',
    alt: 'Costa',
    title: 'Jewels of Costa Rica',
    location: 'Costa Rica',
    days: '2 days & 2 nights',
    start: 'San Jose',
    end: 'San Jose',
    price: '$125.99',
  },
    
  ];

  return (
    <>
      <h2 className="tour-text">
        <span className="best-text">Best </span>
        <span className="package-text">Tour Packages</span>
      </h2>
      <div className="tour-packages-container">
        {tourPackages.map((packageItem, index) => (
          <div key={index} className="tour-package">
            <div className="tour-packages-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img src={packageItem.src} alt={packageItem.alt} />
              {isHovered && <div className="zoom-overlay"></div>}
            </div>
            <div className="tour-packages-details">
              <h3 className="tour-title">{packageItem.title}</h3>
              <div className="tour-location">
                <img src="../images/location_logo.png" alt="Location Icon" className="location-icon" />
                <span className="location-text">{packageItem.location}</span>
              </div>
              <div className="tour-info">
                <span className="tour-days">{packageItem.days}</span>
                <span className="tour-start-end"> | Start: {packageItem.start} - End: {packageItem.end}</span>
              </div>
              <div className="tour-price">Price from <span className="price">{packageItem.price}</span></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TourPackages;
