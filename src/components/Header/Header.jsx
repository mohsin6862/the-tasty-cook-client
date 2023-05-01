import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <div className='mt-5  d-flex align-items-center'>
                <div className='flex-grow-1'>
                    <p className='text-danger text-center fs-6 '> 22 QUICK AND EASY RECIPES IN 30 MINUTES (OR LESS) + 5 CHEF SECRETS TO MAKE YOU A BETTER COOK! </p>
                </div>
                <div className=''>
                    <span className='fs-2 ms-2'><Link className='text-black'><FaFacebook></FaFacebook></Link></span>
                    <span className='fs-2 ms-2'><Link className='text-black'><FaInstagram></FaInstagram></Link></span>
                    <span className='fs-2 ms-2'><Link className='text-black'><FaTwitter></FaTwitter></Link></span>
                </div>
            </div>
            <hr class="border border-secondary border-2 opacity-50 "></hr>
            <h1 className='text-center  text-info my-2 size-xs '>The <span className='text-warning'>Tasty-Cook</span></h1>

            {/* navbar started */}

            <div>

                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 text-center"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Recipes</Nav.Link>
                                <Nav.Link href="#action2">Blog</Nav.Link>
                                <Nav.Link href="#action2">Login</Nav.Link>
                             
                                
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </Container>
    );
};

export default Header;