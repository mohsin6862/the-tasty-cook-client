import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [feature, setFeature] = useState()
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/features')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div className=''>
            {
                feature?.map(f => <div key={f._id} className='border mb-2 p-2 hover:bg-primary'>
                    <h4><Link>{f.category}</Link></h4>
                </div>)
           }
             


            <div className='my-5'>
               <Link to='/login'> <Button className='mb-2' variant="outline-primary"> <FaGoogle /> LogIn With Google</Button></Link>
                <Link to='/login'><Button variant="outline-secondary"><FaGithub /> LogIn With Github</Button></Link>

            </div>
            <div className='my-5'>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>

                </ListGroup>
            </div>


        </div>

    );
};

export default LeftNav;