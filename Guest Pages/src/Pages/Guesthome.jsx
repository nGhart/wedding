import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Guesthome = () => {
    return (
        <Container fluid className='home'>
            <Row className='guestCover'>
                <Col></Col>
                <Col xs={6} className='tableContainer'>
                    <h4>You're on </h4>
                    <div className='table'>
                        <h1>Table</h1>
                        <h1 className='nine'>9</h1>
                    </div>
                    <button className='tableButton'>Table members</button>
                    <p>See who else from <span>placholder text</span> is coming</p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>

    )
}

export default Guesthome