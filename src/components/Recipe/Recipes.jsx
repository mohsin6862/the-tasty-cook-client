import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllRecipe from '../Allrecipe/AllRecipe';
import { FaArrowRight } from 'react-icons/fa';

const Recipes = () => {

    const recipe = useLoaderData()

   
    console.log(recipe)


    return (
        

        <Container className='bg-light p-5'>
                <h1 className='text-warning text-center  my-5'>Meet Our Chef's</h1>

        {
            recipe.map(allRecipe => <Container >
                <Card className="text-center w-50 mx-auto mb-5">
      <Card.Header><h5>{allRecipe.experience}</h5> of Experience</Card.Header>
      <Card.Body>
      <Card.Img style={{width:'300px', height:'300px'}} className='w-75  ' variant="top" src={allRecipe.image} />
        <Card.Title className='my-3'>{allRecipe.chefName}</Card.Title>
        <Card.Text>
          {allRecipe.chefBio}
          <p className='fs-4'>Total Recipes: {allRecipe.recipes}</p>
        </Card.Text>
        <Button variant="danger">View Recipes <FaArrowRight></FaArrowRight></Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          <Card.Title>  {allRecipe.likes} Likes</Card.Title>
        </div>
      </Card.Footer>
    </Card>
            </Container>)
        }
        </Container>
    );
};

export default Recipes;