import React from 'react';
import { Container } from 'react-bootstrap';
import {FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
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
        </Container>
    );
};

export default Header;