import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className='navigBar'>
      <Container fluid >
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Row>
              <Col className='nomargin'>
              <NavLink activeClassName="active" to="/">
                <button className='navbutton'>
                  Seating Chart
                </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="rsvp">
                  <button className='navbutton'>
                    RSVP
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="registry">
                  <button className='navbutton'>
                    Registry
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="programme">
                  <button className='navbutton'>
                    Programme
                  </button>
                </NavLink>
              </Col>
              <Col>
                <NavLink activeClassName="active" to="directions">
                  <button className='navbutton'>
                    Directions
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbars