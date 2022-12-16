import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Teacher from "../../../assets/images/ionic-207965.png"

class Slide extends Component {
    render() {
        return (
            <div style={{background: "#17a2b8"}}>
                <Container >
                <Row>
                    <Col sm={6} style={{padding: " 100px 10px"}}>
                        <h1 className='text-white'>Welcome to lonic Course365 Learing Center</h1>
                        <p style={{color: "#8bcbca"}}>lonic Course365 is an online learning and teaching marketplace with over 5000 courses and 1million studens. Instructor and expertly crafted courses, designed for the modern students and entrepreneur.</p>
                        <Button style={{marginRight: "10px"}} color='warning'>Browse Courses</Button>
                        <Button onClick={this.getAllCourse} >Become an Instructor</Button>
                    </Col>
                    <Col sm={6}>
                        <img src={Teacher} width={400} />
                    </Col>
                </Row>
                </Container>
                
                
            </div>
        );
    }
}

export default Slide;