import React from 'react';
import NavigationBar from '../SharedComponents/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import LeftNav from '../components/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                   
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                     
                    </Col>
                    <Col lg={9}>
                    <Outlet></Outlet>
                    
                    </Col>
                </Row>
                
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default BlogLayout;