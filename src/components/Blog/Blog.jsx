import React from 'react';
import { Button, Container } from 'react-bootstrap';
import NavigationBar from '../../SharedComponents/NavigationBar';

const Blog = () => {
    return (
        <Container>
            <div className='d-flex'>
            <h3 className='text-warning my-5 text-center flex-grow-1'>Question And Answer</h3>
            <div>
            <Button variant='danger'>React to Pdf</Button>
            </div>
            </div>

            <h4 className='text-danger'>Q1. How to validate React props using PropType?</h4>
            <h6>Answer: <small>Controlled components or inputs are components whose value is tied to the React state of the components whereas uncontrolled components are the ones whose value is controlled or stored in the DOM directly and can only be accessed from the DOM.</small></h6>
            <h4 className='text-danger mt-5'>Q2. Tell us the differences between uncontrolled and controlled components?</h4>
            <h6>Answer: <small>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. </small></h6>
            <h4 className='text-danger mt-5'>Q3. Tell us the difference between nodejs and express js.?</h4>
            <h6>Answer: <small>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is used to run JavaScript in ways similar to how the browser runs JavaScript but on servers. Express is a library (called a package in the Node.js ecosystem) that makes it really easy to build APIs or serve files.
            </small></h6>
            <h4 className='text-danger mt-5'>Q4. TWhat is a custom hook, and why will you create a custom hook?</h4>
            <h6>Answer: <small>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.

                A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:
            </small></h6>
        </Container>
    );
};

export default Blog;