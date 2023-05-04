import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import AllRecipe from '../Allrecipe/AllRecipe';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Recipes = () => {

    const recipe = useLoaderData();
    const [seeAll,setSeeAll]=useState(false)

   
    console.log(recipe)
    const handleSeeAll =()=>{
        setSeeAll(true)

    }


    return (
        

        <Container className='bg-light p-5'>
                <h1 className='text-warning text-center  my-5'>Meet Our Chef's</h1>

        {
            recipe.slice(0,seeAll? 7 : 4).map(allRecipe => <Container key={allRecipe._id}>
                <Card className="text-center w-100 mx-auto mb-5">
      <Card.Header><h5>{allRecipe.experience}</h5> of Experience</Card.Header>
      <Card.Body>
      <Card.Img style={{width:'400px', height:'300px'}} className='w-75  ' variant="top" src={allRecipe.image} />
        <Card.Title className='my-3'>{allRecipe.chefName}</Card.Title>
        <Card.Text>
          {allRecipe.chefBio}
          <p className='fs-4'>Total Recipes: {allRecipe.recipes}</p>
        </Card.Text>
       <Link to={`/recipes/${allRecipe._id}`}> <Button variant="danger">View Recipes <FaArrowRight></FaArrowRight></Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>
          <Card.Title>  {allRecipe.likes} Likes</Card.Title>
        </div>
      </Card.Footer>
    </Card>
            </Container>)
        }
        <div  className='text-center' >
       <span onClick={handleSeeAll}>
       {!seeAll &&
         <Button variant="danger">See All <FaArrowDown></FaArrowDown></Button>
       }
       </span>
        </div>
        </Container>
    );
};

export default Recipes;