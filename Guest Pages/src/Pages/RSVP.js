import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RSVP = () => {
  return (
    <div className='home'>
 

    <Form  className='rsvpCover'>
        <h2>Changed your mind? Let us know.</h2>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="rsvpForm">
          <Form.Group>
          <Form.Check
            inline
            label="Yes. I will be there"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Group>
          <Form.Check aria-label="option 1" className='plusOne credit' label="Plus One" />
          </Form.Group>
          </Form.Group>
          <Form.Check
            inline
            label="Sorry. I can't make it"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
    <Button className='signButton'>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default RSVP