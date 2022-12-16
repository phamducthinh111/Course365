import React from 'react'
import { CardFooter, Col, Container, Row, Card, CardBody, CardTitle ,CardText } from 'reactstrap';
import {FaRegBookmark, FaRegClock} from "react-icons/fa"


export default function CourseCard( {data} ) {
    return (
        <Card
            style={{
                width: '18rem',
            }}
            className="h-100"
            >
            <img
                alt="Card"
                src={data.coverImage}
            />
            <CardBody className='py-3 p-4'>
                <CardTitle tag="h5" className='py-3'>
                    <a href='#' style={{ textDecorationLine: "none" }}>{data.courseName}</a>
                </CardTitle>
                <CardText>
                    <div className='d-flex pb-3'>
                        <span> <FaRegClock /> </span> &emsp;
                        <span> {data.duration}</span> &emsp;
                        <span> {data.level}</span>
                    </div>
                    <div>
                        <strong>${data.discountPrice} </strong>
                        <del className="text-secondary">${data.price}</del>
                    </div>
                </CardText>
            </CardBody>
            <CardFooter>
                <img src={data.teacherPhoto} alt='teacher' className='rounded-circle' width="45" />&ensp;
                <small>{data.teacherName}</small>&ensp;
                <FaRegBookmark />
            </CardFooter>
        </Card>
    );
            
}

