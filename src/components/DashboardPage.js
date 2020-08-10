import React from 'react';
import '../styles/DashboardPage.css';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardPage = ({ user }) => {
  const getCurrentTimeStage = () => {
    const currentHour = new Date().getHours();
    if(currentHour < 12) return 'morning';
    else if(12 <= currentHour && currentHour < 17) return 'afternoon';
    else if(17 <= currentHour && currentHour < 24) return 'evening';
    else return 'day';
  };

  return (
    <Container fluid>
      <Row>
        <h2>state of mind</h2>
      </Row>
      <Row>
        <Col>1 of 2</Col>
        <Col>
          <h1>Good {getCurrentTimeStage()}, {user}!</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;