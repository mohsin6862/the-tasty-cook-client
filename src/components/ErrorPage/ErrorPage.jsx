import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1>Oops! Something went wrong.</h1>
          <p>We apologize for the inconvenience, but an error has occurred.</p>
          <Button variant="primary" href="/">Go back to homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
