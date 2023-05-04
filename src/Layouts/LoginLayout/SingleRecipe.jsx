import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import LeftNav from '../../components/LeftNav/LeftNav';
import NavigationBar from '../../SharedComponents/NavigationBar';

const SingleRecipe = () => {
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

export default SingleRecipe;