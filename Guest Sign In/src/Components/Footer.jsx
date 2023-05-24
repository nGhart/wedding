import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='footer'>
            <Row className='help'>
                <Col>
                    <p>FAQs</p>
                </Col>
                <Col >
                    <p>Terms of Service</p>
                </Col>
                <Col >
                    <p>Contact Us</p>
                </Col>
            </Row>
            <Row>
                <Col>Ⓒ 2022</Col>
            </Row>
            <Row className="credit">
           <span>Photo by <a href="https://unsplash.com/@arshadpooloo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Arshad Pooloo</a> on <a href="https://unsplash.com/backgrounds/events/wedding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
            </Row>
        </Container>
  )
}

export default Footer