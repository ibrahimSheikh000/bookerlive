import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/cards.css';

const HotelBookingForm = () => {
  return (
    <Container fluid className="hotel-booking-container">
      <Form className="d-flex flex-wrap align-items-end">
        <Col xs={12} sm={6} md className="mb-3 mb-md-0 pe-md-2">
          <Form.Group>
            <Form.Label>City or Hotel</Form.Label>
            <Form.Control type="text" placeholder="E.g. New York" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md className="mb-3 mb-md-0 px-md-2">
          <Form.Group>
            <Form.Label>Check-in</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md className="mb-3 mb-md-0 px-md-2">
          <Form.Group>
            <Form.Label>Check-out</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>
        </Col>
        <Col xs={6} sm={3} md className="mb-3 mb-md-0 px-md-2">
          <Form.Group>
            <Form.Label>Adults</Form.Label>
            <Form.Select defaultValue="1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={6} sm={3} md className="mb-3 mb-md-0 px-md-2">
          <Form.Group>
            <Form.Label>Children</Form.Label>
            <Form.Select defaultValue="0">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md="auto" className="ps-md-2">
          <Button variant="danger" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default HotelBookingForm;
