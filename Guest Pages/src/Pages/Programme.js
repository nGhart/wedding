import React from 'react'
import { Col, Row } from 'react-bootstrap'
import order from '../images/Order of Service.png'
import party from '../images/Party.png'

import Image from 'react-bootstrap/Image';

const Programme = () => {
  return (
    <>
      <div className='programme'>
        <Row className="justify-content-md-center">
          <Col sm={6}>

            <Image src={order} fluid className='one' />


          </Col>
          <Col sm={6}>
            <Image src={party} fluid className='two' />

          </Col>
        </Row>

        <div className='credit programmeCredit'>Photo by <a href="https://unsplash.com/@yogidan2012?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniele Levis Pelusi</a> on <a href="https://unsplash.com/images/nature/flower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
      </div>

    </>
  )
}

export default Programme