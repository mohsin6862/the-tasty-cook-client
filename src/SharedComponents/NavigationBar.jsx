import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavigationBar = () => {
    const {user,Logout}=useContext(AuthContext)
    const handleLogout=() =>{
        Logout()
    }    
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
                                <Nav.Link href="/" active  className={({active})=>(active? variant="primary" : '')}>Home</Nav.Link>
                                <Nav.Link href="#action2" className={({isActive})=>(isActive? 'text-primary' : '')}>Recipes</Nav.Link>
                                <Nav.Link href="/blog" active variant="primary"  className={({isActive})=>(isActive? 'text-primary' : '')}>Blog</Nav.Link>
                           


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
                            <Nav className=''>
                            {user && <Nav.Link href="#deets"><FaUser style={{fontSize:'2rem'}}></FaUser> {user.email}</Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                            {user? <Button variant="secondary" onClick={handleLogout}>Logout</Button> : <Link to='/login'><Button variant="secondary" >Login</Button></Link> }
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </Container>
    );
};

export default NavigationBar;