import React from 'react';
import { Button, Carousel, Container, Form, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import slider2 from '../../assets/n1.jpg'
import slider3 from '../../assets/n2.jpg'
import slider4 from '../../assets/pexels-pixabay-262978.jpg'
import NavigationBar from '../../SharedComponents/NavigationBar';


const Header = () => {
    return (
        <Container>

            <NavigationBar></NavigationBar>
           
            {/* banner */}

            <div className='my-5'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img 
                            className="d-block w-100 "
                            src={slider2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Button variant="warning">View all recipes</Button>
                            <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={slider4}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <Button variant="warning">MEET OUR CHEF'S</Button>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                      
                        <Button variant="warning">Apply as Chef</Button>
                            <p className='text-white'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            
        </Container>
    );
};

export default Header;