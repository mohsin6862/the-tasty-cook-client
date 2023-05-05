import React, { useContext } from 'react';
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavigationBar = () => {
    const { user, Logout } = useContext(AuthContext)
    const handleLogout = () => {
        Logout()
    }
    return (
        // <Container>
        //     <div className='mt-5  d-flex align-items-center'>
        //         <div className='flex-grow-1'>
        //             <p className='text-danger text-center fs-6 '> 22 QUICK AND EASY RECIPES IN 30 MINUTES (OR LESS) + 5 CHEF SECRETS TO MAKE YOU A BETTER COOK! </p>
        //         </div>
        //         <div className=''>
        //             <span className='fs-2 ms-2'><Link className='text-black'><FaFacebook></FaFacebook></Link></span>
        //             <span className='fs-2 ms-2'><Link className='text-black'><FaInstagram></FaInstagram></Link></span>
        //             <span className='fs-2 ms-2'><Link className='text-black'><FaTwitter></FaTwitter></Link></span>
        //         </div>
        //     </div>
        //     <hr class="border border-secondary border-2 opacity-50 "></hr>
        //     <h1 className='text-center  text-info my-2 size-xs '>The <span className='text-warning'>Tasty-Cook</span></h1>

        //     {/* navbar started */}

        //     <div>

        //         <Navbar bg="light" expand="lg">
        //             <Container fluid>

        //                 <Navbar.Collapse id="navbarScroll">
                           
        //                     <Nav className="me-auto my-2 my-lg-0 text-center" style={{ maxHeight: '100px' }} navbarScroll>
        //                         <NavLink exact to="/recipes" className="nav-link" activeClassName="active">
        //                             Home
        //                         </NavLink>
        //                         <NavLink to="" className="nav-link" activeClassName="active">
        //                             Recipes
        //                         </NavLink>
        //                         <NavLink to="/blog" className="nav-link" activeClassName="active">
        //                             Blog
        //                         </NavLink>
        //                     </Nav>
        //                     <Form className="d-flex">
        //                         <Form.Control
        //                             type="search"
        //                             placeholder="Search"
        //                             className="me-2"
        //                             aria-label="Search"
        //                         />
        //                         <Button variant="outline-success">Search</Button>
        //                     </Form>
        //                     <Nav className=''>
        //                         {user && <Nav.Link href="#deets"><Image title={user.displayName} style={{ width: '40px', height: '40px' }} src={user.photoURL} roundedCircle /></Nav.Link>}
        //                         <Nav.Link eventKey={2} href="#memes">
        //                             {user ? <Button variant="secondary" onClick={handleLogout}>Logout</Button> : <Link to='/login'><Button variant="secondary" >Login</Button></Link>}
        //                         </Nav.Link>
        //                     </Nav>
        //                 </Navbar.Collapse>
        //             </Container>
        //         </Navbar>

        //     </div>

        // </Container>
        <Container>
  <div className='mt-5 d-flex flex-column flex-md-row align-items-center'>
    <div className='flex-grow-1'>
      <p className='text-danger text-center fs-6'>22 QUICK AND EASY RECIPES IN 30 MINUTES (OR LESS) + 5 CHEF SECRETS TO MAKE YOU A BETTER COOK! </p>
    </div>
    <div className='ms-md-3 mt-3 mt-md-0'>
      <span className='fs-2 ms-2'><Link className='text-black'><FaFacebook/></Link></span>
      <span className='fs-2 ms-2'><Link className='text-black'><FaInstagram/></Link></span>
      <span className='fs-2 ms-2'><Link className='text-black'><FaTwitter/></Link></span>
    </div>
  </div>
  <hr className='border border-secondary border-2 opacity-50'/>
  <h1 className='text-center text-info my-2 size-xs'>The <span className='text-warning'>Tasty-Cook</span></h1>

  {/* navbar started */}

  <div>

    <Navbar bg='light' expand='lg'>
      <Container fluid>

        <Navbar.Toggle aria-controls='navbarScroll'/>
        <Navbar.Collapse id='navbarScroll'>

          <Nav className='me-auto my-2 my-lg-0 text-center' style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink exact to='/recipes' className='nav-link' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='' className='nav-link' activeClassName='active'>
              Recipes
            </NavLink>
            <NavLink to='/blog' className='nav-link' activeClassName='active'>
              Blog
            </NavLink>
          </Nav>

          <Form className='d-flex flex-column flex-md-row align-items-center ms-md-auto'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-md-2 mb-3 mb-md-0'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>

          <Nav className='ms-md-3'>
            {user && (
              <Nav.Link href='#deets'>
                <Image title={user.displayName} style={{ width: '40px', height: '40px' }} src={user.photoURL} roundedCircle/>
              </Nav.Link>
            )}
            <Nav.Link eventKey={2} href='#memes'>
              {user ? (
                <Button variant='secondary' onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Link to='/login'>
                  <Button variant='secondary'>Login</Button>
                </Link>
              )}
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