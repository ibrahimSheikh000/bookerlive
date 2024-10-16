import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Gift, Wallet2, Heart } from 'lucide-react';
import '../css/featureHighlight.css'

const FeatureHighlight = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="bg-light rounded-circle d-inline-flex p-3 mb-3">
      <Icon size={24} className="text-danger" />
    </div>
    <h5>{title}</h5>
    <p className="text-muted small">{description}</p>
  </div>
);

const FeatureHighlights = () => {
  const features = [
    {
      icon: Gift,
      title: "We find better deals",
      description: "Considered an invitation do introduced sufficient understood instrument it."
    },
    {
      icon: Wallet2,
      title: "Best price guaranteed",
      description: "Discovery sweetness principle discourse shameless bed one excellent."
    },
    {
      icon: Heart,
      title: "Travellers love us",
      description: "Sentiments of surrounded friendship dispatched connection john shed hope."
    }
  ];

  return (
    <Container className="my-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-4 mb-md-0">
            <FeatureHighlight {...feature} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureHighlights;