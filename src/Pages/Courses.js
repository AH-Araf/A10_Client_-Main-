import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesCart from './CoursesCart';
import LeftSideNav from './LeftSideNav';

const Courses = () => {
    return (
        <div className='ms-lg-4 me-lg-4 mb-5'>
            <h1>This is Courses</h1> 
                <Row>
                    <Col className='d-block col-12 col-lg-4 d-lg-flex justify-content-center cart-courses'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col className='d-block col-12 col-lg-8 d-lg-flex justify-content-center left-nav-courses'>
                        <CoursesCart></CoursesCart>
                    </Col>
                    
                </Row>
        </div>
    );
};

export default Courses;