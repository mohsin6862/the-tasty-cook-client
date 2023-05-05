import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewRecipes = () => {
    const [newRecipe, setNewRecipe] = useState();

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/newrecipes')
            .then(res => res.json())
            .then(data => setNewRecipe(data))
    }, [])

    return (
        <Row className="mt-5">
            {newRecipe?.map(rs => (
                <Col key={rs.id} xs={12} sm={12} lg={6}>
                    <Card className="text-center mb-3">
                        <Card.Img style={{ height: '300px' }} variant="top" src={rs.image} />
                        <Card.Body>
                            <Card.Title>{rs.name}</Card.Title>
                            <Card.Text className="text-start">{rs.des}</Card.Text>
                            <Link to={rs.youtube_link}>
                                <Button variant="danger">Watch On Youtube</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default NewRecipes;

