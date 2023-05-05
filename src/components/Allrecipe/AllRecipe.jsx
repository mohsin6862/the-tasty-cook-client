import React from 'react';
import { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaArrowLeft, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllRecipe = () => {
    const [addedToFavourites, setAddedToFavourites] = useState(false);
    const handleAddToFavourites = () => {
        setAddedToFavourites(true);
        // You can add your code to save the favourite recipe here
    }
    const allrecipe = useLoaderData()
    console.log(allrecipe)
    const { Recipe_image,Recipe_image1,Recipe_image2,recipeName,recipeName1,recipeName2,direction,ingredients1,ingredients2,ingredients3,ingredients4, rating } = allrecipe
    return (
        <div>
            
            <CardGroup>
                <Card>
                    <Card.Img style={{height:'200px'}} variant="top" src={Recipe_image} />
                    <Card.Body>
                        <Card.Title>{recipeName}</Card.Title>
                        <Card.Text>
                        <h6>Direction: <small> {direction}</small></h6>
                        <h6>Ingredients:</h6>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients1}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients2}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients3}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients4}</p>
                      <h6> Rating: {rating}</h6>
                        </Card.Text>
                     <div className='text-center'>
                    
                    <Link to='/recipes'>  <Button  variant="secondary">Back to Home <FaArrowLeft></FaArrowLeft></Button></Link>
                     </div>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Watch this recipe on <Link>Youtube</Link></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{height:'200px'}} variant="top" src={Recipe_image2} />
                    <Card.Body>
                        <Card.Title>{recipeName1}</Card.Title>
                        <Card.Text>
                        <h6>Direction: <small> {direction}</small></h6>
                        <h6>Ingredients:</h6>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients1}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients2}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients3}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients4}</p>
                      <h6> Rating: {rating}</h6>
                   
                        </Card.Text>
                        <div className='text-center'>
                    
                    <Link to='/recipes'>  <Button  variant="secondary">Back to Home <FaArrowLeft></FaArrowLeft></Button></Link>
                     </div>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Watch this recipe on <Link>Youtube</Link></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{height:'200px'}} variant="top" src={Recipe_image1} />
                    <Card.Body>
                        <Card.Title>{recipeName2}</Card.Title>
                        <Card.Text>
                      <h6>Direction: <small> {direction}</small></h6>
                      <h6>Ingredients:</h6>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients1}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients2}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients3}</p>
                      <p><FaArrowAltCircleRight></FaArrowAltCircleRight> {ingredients4}</p>
                      <h6> Rating: {rating}</h6>
 
                        </Card.Text>
                        <div className='text-center'>
                   
                    <Link to='/recipes'>  <Button  variant="secondary">Back to Home <FaArrowLeft></FaArrowLeft></Button></Link>
                     </div>
                    </Card.Body>
                    <Card.Footer>
                  <div className=''>
                  <small className="text-muted flex-grow-1">Watch this recipe on <Link>Youtube</Link></small>
                 
                  </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <div className='my-2 text-center'>
            <Button
                                className='mb-2'
                                variant="warning"
                                disabled={addedToFavourites}
                                onClick={handleAddToFavourites}
                            >
                                {addedToFavourites ? "Added to Favourites" : "Add to Favourite"} 
                                {addedToFavourites ? <FaHeart style={{marginLeft: "10px"}}/> : <FaHeart/>}
                            </Button>
            </div>
           
        </div>
    );
};

export default AllRecipe;