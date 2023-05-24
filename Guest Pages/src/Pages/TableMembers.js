import React from 'react'
import Card from 'react-bootstrap/Card';
    import ListGroup from 'react-bootstrap/ListGroup';

const TableMembers = () => {
  return (
    
        <Card style={{ width: '18rem' }}>
          <Card.Header>Table 9</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Adwoa Guest</ListGroup.Item>
            <ListGroup.Item>Abena Guest</ListGroup.Item>
            <ListGroup.Item>Akua Guest</ListGroup.Item>
            <ListGroup.Item>Yaa Guest</ListGroup.Item>
            <ListGroup.Item>Afia Guest</ListGroup.Item>
            <ListGroup.Item>Ama Guest</ListGroup.Item>
            <ListGroup.Item>Akosua Guest</ListGroup.Item>
            <ListGroup.Item>Kwadwo Guest</ListGroup.Item>
            <ListGroup.Item>Kwabena Guest</ListGroup.Item>
          </ListGroup>
        </Card>
  )
}

export default TableMembers