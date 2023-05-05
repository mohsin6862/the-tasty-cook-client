import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import AllRecipe from '../Allrecipe/AllRecipe';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import NewRecipes from '../NewRecipes/NewRecipes';
import LazyLoad from 'react-lazyload';

const Recipes = () => {
  const recipe = useLoaderData();
  const [seeAll, setSeeAll] = useState(false);

  console.log(recipe);
  const handleSeeAll = () => {
    setSeeAll(true);
  };

  return (
    <Container className="bg-light p-2">
      <h1 className="text-warning text-center  my-2">Meet Our Chef's</h1>
      <Row xs={1} sm={2}>
        {recipe.slice(0, seeAll ? 7 : 4).map((allRecipe) => (
          <Col key={allRecipe._id} className="my-3">
            <Card className="text-center w-100 mx-auto">
              <Card.Header>
                <h5>{allRecipe.experience}</h5> of Experience
              </Card.Header>
              <Card.Body>
                <LazyLoad height={300} once>
                  <Card.Img
                    style={{ width: '400px', height: '300px' }}
                    className="w-75"
                    variant="top"
                    src={allRecipe.image}
                  />
                </LazyLoad>
                <Card.Title className="my-3">{allRecipe.chefName}</Card.Title>
                <Card.Text>
                  {allRecipe.chefBio}
                  <p className="fs-4">Total Recipes: {allRecipe.recipes}</p>
                </Card.Text>
                <Link to={`/recipes/${allRecipe._id}`}>
                  <Button variant="danger">
                    View Recipes <FaArrowRight></FaArrowRight>
                  </Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div>
                  <Card.Title> {allRecipe.likes} Likes</Card.Title>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      {!seeAll && (
        <div className="text-center my-3">
          <Button variant="danger" onClick={handleSeeAll}>
            See All <FaArrowDown></FaArrowDown>
          </Button>
        </div>
      )}
      <div className='mt-5'>

      <h1 className="text-warning text-center   ">Checkout Our New-Recipes</h1>
      <NewRecipes></NewRecipes>

      </div>
    </Container>
  );
};

export default Recipes;
