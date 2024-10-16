import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/CityShowcase.css';

const CityCard = ({ city, image }) => (
  <div className="city-card">
    <div className="image-container">
      <img src={image} alt={city} />
    </div>
    <h5 className="city-name">{city}</h5>
  </div>
);

const CityShowcase = () => {
  const cities = [
    { name: 'Bangkok', image: '../../images/Bangkok.JPG'},
    { name: 'Hong Kong', image: '../../images/HongKong.JPG'},
    { name: 'London', image: '../../images/london5.JPG'},
    { name: 'New York', image:'../../images/Newyork.JPG' }
  ];

  return (
    <>
    <h2 className='destinations-heading'>
            <span className='top-text'>Top </span><span className='dest-text'>Destinations</span>
    </h2>
    <Container className="my-5">
      <Row>
        {cities.map((city, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="mb-4">
            <CityCard city={city.name} image={city.image} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default CityShowcase;