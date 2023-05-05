import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaNewspaper, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container bg-dark text-white mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h4 className='text-center  text-info my-2 size-xs mt-3'>The <span className='text-warning'>Tasty-Cook</span></h4>
                    <div className='ms-5 mt-5'>
                        <h6><Link to='/recipes'>Home</Link></h6>
                        <h6><Link to='/blog'>Blogs</Link></h6>
                        <h6><Link to='/recipes'>Our Master Chef's</Link></h6>
                        <h6><Link to='/recipes'>Recpies</Link></h6>
                        <h6><Link>About Us</Link></h6>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <h4 className='mt-5'>Terms and Condition</h4>
                    <div className='mt-5'>
                        <h6><Link to='/terms'>Privacy</Link></h6>
                        <h6><Link to='/terms'>Policy</Link></h6>
                        <h6><Link to='/terms'>Terms</Link></h6>
                        <h6><Link to='/terms'>Conditions</Link></h6>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <h4 className='mt-5'>Follow Us</h4>
                    <p><Button className='mt-5' variant="outline-primary"> <FaYoutube /> Youtube</Button></p>
                    <p>  <Button variant="outline-primary"><FaTiktok />  TIK-TOK</Button></p>

                    <p><Button variant="outline-primary"> <FaFacebook /> Facebook</Button></p>
                    <p>  <Button variant="outline-primary"><FaTwitter />  Twitter</Button></p>
                    <p>    <Button variant="outline-primary"><FaInstagram /> Instagram</Button></p>
                </div>
                <div className="col-12 col-md-2">
                    <h4 className='mt-5'>Connect with us</h4>
                    <p>   <Link to='/login'> <Button variant="outline-primary"> LogIn</Button></Link></p>
                    <p>    <Link to='/register'> <Button variant="outline-primary">Register</Button></Link></p>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h6 className='text-center my-4'>All copyright reserved for The Testy-cook</h6 >
                </div>
            </div>
        </div>
    );
};

export default Footer;
