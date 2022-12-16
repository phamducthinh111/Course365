import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CourseCard from '../CourseCard'

export default function PopularCourses() {
    const [recommendedCourse, setRecommenedCourse] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/popular")
          .then(res => res.json())
          .then((result) => {
              setRecommenedCourse(result.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
            
      }, [])
    console.log(recommendedCourse)
    return (
        <Container className='mt-5'>
            <Row>
                <h3>Most Popular</h3>
            </Row>
            <Row>
            {recommendedCourse.map(course => (
            <Col sm={3} key={course._id}>
                <CourseCard data={course} />
            </Col>
            ))}
            </Row>
        </Container>
    )
}
