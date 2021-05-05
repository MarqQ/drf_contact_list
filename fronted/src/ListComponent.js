import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
// import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    return ( 
        // <Table striped bordered hover>            
        //     <tbody> 
        //         <tr>
        //             <td colSpan="2">{props.listName}</td>
        //             <td><button class="btn btn-danger">Delete</button></td>
        //         </tr>
        //     </tbody> 
        // </Table>
        <Container>
            <Row>
                <Col md={12}>{props.listName}</Col>
                <Col md={12}>{props.listName}</Col>
                <Col md={{ span: 4, offset: 10 }}><button class="btn btn-danger">Delete</button></Col>
            </Row>
        </Container>
    );
}