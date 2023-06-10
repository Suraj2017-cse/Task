import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer className='bg-dark text-light'>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <h5>Links</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, atque?</p>
                </Col>
                <Col xs={12} md={6}>
                    <h5>contact us Us</h5>
                    <address>
                        <div>Location : <span>12<sup>th</sup> floor XYZ road Muzaffarpur </span></div>
                        <div>Contact : <a href="tel:8989898989">+91 8989898989</a></div>

                    </address>
                </Col>
            </Row>
        </Container>

    </footer>
    </>
  )
}

export default Footer