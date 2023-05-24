import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Partnerstore from './Partner'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Items } from '../Items';
import Form from 'react-bootstrap/Form';

function Registry() {
  return (
    <Container fluid className='registryContain'>

      <Row>
        <Col xs={3} style={{backgroundColor: "rgba(255, 255, 255, 0.2)", marginLeft: "10px"}} >
          <Partnerstore />
        </Col>
        <Col>
          <Row>
            <Col xs={{ span: 4, offset: 8 }}>
              <Form.Select aria-label="Default select example">
                <option>Sort</option>
                <option value="1">Price: High to Low</option>
                <option value="2">Price: Low to High</option>
                <option value="3">Newest</option>
                <option value="4">Popular</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            {Items.map((item) => {
              return (

                <Col xs={3}>
                  <Card style={{ margin: "5px", backgroundColor: "rgba(255, 255, 255, 0.2)" }} >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <ListGroup className="list-group-flush">
                        <Card.Title>
                          <a href={`/registry/${item.id}`}>
                            {item.item}</a>
                        </Card.Title>
                        <ListGroup.Item>{item.price}</ListGroup.Item>
                      </ListGroup>

                      <Card.Text>
                        <small style={{ fontSize: "12px" }}>{item.description}</small>
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Card.Link href="#">Contribute</Card.Link>
                      <Card.Link href="#">Purchase</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}

          </Row>
        </Col>
      </Row>
      <Row>
        <div className='why'></div>
      </Row>
    </Container>
  )
}

export default Registry