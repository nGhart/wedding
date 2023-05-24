import React from 'react'

import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';

const GuestSign = () => {
  return (
    <div className='guestSign'>
            <div className='guestContainer'>
                <Form className='guestForm' action='http://localhost:3002/'>
                    <h1>Sign in here</h1>
                    <small>You will find all the information you need on your invitation</small>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" autoFocus/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    
                    <button className='signButton' type='submit'>
                        Sign In
                    </button>
                </Form>
            </div>
        </div>
  )
}

export default GuestSign