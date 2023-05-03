import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaNewspaper, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container bg-dark text-white mt-5">
            <div className="row">
                <div className="col">
                    <h4 className='text-center  text-info my-2 size-xs mt-3'>The <span className='text-warning'>Tasty-Cook</span></h4>

                    <div className='ms-5 mt-5'>

                        <h6><Link>Home</Link></h6>
                        <h6><Link>About Us</Link></h6>
                        <h6><Link>Our Master Chef's</Link></h6>
                        <h6>   <Link>Blogs</Link></h6>
                        <h6> <Link>Recpies</Link></h6>





                    </div>

                </div>
                <div className="col ">
                <h4 className='mt-5'>Terms and Condition</h4>
                <div className='mt-5'>
                <h6><Link>Privacy</Link></h6>
                        <h6><Link>Policy</Link></h6>
                        <h6><Link>Terms</Link></h6>
                        <h6>   <Link>Conditions</Link></h6>
                </div>

                   


                </div>
                <div className="col">
                <h4 className='mt-5'>Subscribe Us</h4>
                    <p><Button className='mt-5' variant="outline-primary"> <FaYoutube /> Youtube</Button></p>
                    <p>  <Button variant="outline-primary"><FaTiktok />  TIK-TOK</Button></p>
                    <p>    <Button variant="outline-primary"><FaNewspaper /> News-Letter</Button></p>
                    
                    
                </div>
                <div className="col">
                <h4 className='mt-5'>Follow Us</h4>
                    <p><Button className='mt-5' variant="outline-primary"> <FaFacebook /> Facebook</Button></p>
                    <p>  <Button variant="outline-primary"><FaTwitter />  Twitter</Button></p>
                    <p>    <Button variant="outline-primary"><FaInstagram /> Instagram</Button></p>
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