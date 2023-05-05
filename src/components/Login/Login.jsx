import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaArrowDown, FaArrowRight, FaGoogle } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import { useState } from 'react';




const LogIn = () => {
  const [error, setError] = useState()
  const [success,setSuccess]= useState()
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/recipes';
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const auth = getAuth(app);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    form.reset();
    setError('')
  
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setSuccess('Login successful')
        navigate(from)
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })
  }
  const handleGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const signed = result.user
        setSuccess('Login successful')
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  }
  const handleGitHub = () => {
    signInWithPopup(auth, GithubProvider)
      .then(result => {
        const signedWithGit = result.user
        setSuccess('Login successful')
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })
  }
  return (
    <div>
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
          <Form.Text className="text-muted">

            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>

          </Form.Text>
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
        <div className=''>
          <p>
            <Button className='my-3' onClick={handleGoogle} variant="primary" type="submit"> <FaGoogle></FaGoogle>
              Log In With Google
            </Button>
          </p>
          <Button className='mb-5' onClick={handleGitHub} variant="primary" type="submit"> <FaGoogle></FaGoogle>
            Log In With GitHub
          </Button>
        </div>

      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LogIn;