import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaArrowLeft, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllRecipe = () => {
    const allrecipe = useLoaderData()
    console.log(allrecipe)
    const { Recipe_image,Recipe_image1,Recipe_image2,recipeName,recipeName1,recipeName2,direction,ingredients1,ingredients2,ingredients3,ingredients4,  } = allrecipe
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
                        </Card.Text>
                     <div className='text-center'>
                     <Button  className='mb-2' variant="secondary">ADD to Favourite <FaHeart></FaHeart></Button>
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
                   
                        </Card.Text>
                        <div className='text-center'>
                     <Button  className='mb-2' variant="secondary">ADD to Favourite <FaHeart></FaHeart></Button>
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
 
                        </Card.Text>
                        <div className='text-center'>
                     <Button  className='mb-2' variant="secondary">ADD to Favourite <FaHeart></FaHeart></Button>
                    <Link to='/recipes'>  <Button  variant="secondary">Back to Home <FaArrowLeft></FaArrowLeft></Button></Link>
                     </div>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Watch this recipe on <Link>Youtube</Link></small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllRecipe;