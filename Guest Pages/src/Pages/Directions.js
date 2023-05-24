import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Mapss from './Map';

const Directions = () => {
    return (

        <Container fluid className='directions'>
            <Row>
                
                <Col xs={6} className='theMap'>
                    <div>
                    <Mapss />
                </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default Directions