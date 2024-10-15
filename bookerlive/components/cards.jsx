import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/cards.css'

const HotelBookingForm = () => {
  return (
    <Container fluid className="mt-3" hotel-booking-container>
      <Form>
        <Row className="align-items-end">
          <Col xs={12} md>
            <Form.Group>
              <Form.Label>City or Hotel</Form.Label>
              <Form.Control type="text" placeholder="E.g. New York" />
            </Form.Group>
          </Col>
          <Col xs={12} md>
            <Form.Group>
              <Form.Label>Check-in</Form.Label>
              <Form.Control type="date" placeholder="Pick a day" />
            </Form.Group>
          </Col>
          <Col xs={12} md>
            <Form.Group>
              <Form.Label>Check-out</Form.Label>
              <Form.Control type="date" placeholder="Pick a day" />
            </Form.Group>
          </Col>
          <Col xs={6} md>
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
          <Col xs={6} md>
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
          <Col xs={12} md="auto" className="mt-3 mt-md-0">
            <Button variant="danger" type="submit" className="w-100">
              <i className="bi bi-search"></i> Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default HotelBookingForm;
