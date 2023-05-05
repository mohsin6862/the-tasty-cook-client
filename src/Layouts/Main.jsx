import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../components/LeftNav/LeftNav';
import RightNav from '../components/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    <RightNav></RightNav>
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

export default Main;