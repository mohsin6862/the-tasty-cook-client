import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';




const LogIn = () => {
    const {signIn}= useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/recipes'

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <Container className='w-50 '>

<Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <br />
      <Form.Text className="text-muted">

        <p>Don't have an account? <Link to='/register'>Please Register</Link></p>
         
        </Form.Text>
    </Form>

           
        </Container>
    );
};

export default LogIn;