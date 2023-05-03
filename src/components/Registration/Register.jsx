import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const [accepted,setAccepted]=useState()

    const handleRegister = (event) => {
        event.preventDefault()
    }

    const handleChecked=()=>{
        
    }
    return (
        <div>
            <Container className='w-50 '>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Your photo url" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirm' placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleChecked}
                            name='accepted'
                            type="checkbox"
                            label={<>Accept <Link to='/terms'>All Terms and Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-muted">

                        <p>Already have an account? <Link to='/login'>Please LogIn</Link></p>

                    </Form.Text>
                </Form>


            </Container>
        </div>
    );
};

export default Register;