import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Tabled = () => {
  return (
    <Container fluid className='tabled'>
            <Row className='guestCover'>
                <Col></Col>
                <Col xs={6} className='tableContainer'>
                    <h4>You're on </h4>
                    <div className='table'>
                        <h1>Table</h1>
                        <h1 className='nine'>9</h1>
                    </div>
                    <Link to="members">
                    <button className='tableButton'>Table members</button>
                    </Link>
                    <p>See who else from <span>placholder text</span> is coming</p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
  )
}

export default Tabled