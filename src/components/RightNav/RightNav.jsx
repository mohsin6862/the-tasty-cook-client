import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const RightNav = () => {

    const [apply, setApply] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/apply')
            .then(res => res.json())
            .then(data => setApply(data))
    }, [])

    return (
        <Container>
            <h4>Apply As Chef</h4>
          
          {
            apply.map(job=>   <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={job.image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>)
          }

        </Container>
    );
};

export default RightNav;