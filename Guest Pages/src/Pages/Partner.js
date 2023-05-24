import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Partnerstore = () => {
  return (
    <div >
      


    <Form>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
               <label style={{textAlign: "left"}} >Price Range</label>
      <Form.Range />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Select aria-label="Default select example">
      <option>Partner Store</option>
      <option value="1">Store A</option>
      <option value="2">Store B</option>
      <option value="3">Store C</option>
      <option value="4">Store D</option>
    </Form.Select>
      </Form.Group>
      <Button className='' type="submit">
        Search
      </Button>
    </Form>
  
    </div>
  )
}

export default Partnerstore