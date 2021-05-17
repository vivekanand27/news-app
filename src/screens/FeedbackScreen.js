import React, { useEffect } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function FeedbackScreen() {

    useEffect(() => {

    }, [])

    return (
        <>
            <Row>
                <Col xs={7}> <h5>Thank you so much for taking the time!</h5>
                    <small>Please provide the below details!</small>
                </Col>
                <Col xs={5}>
                    <Link to="/" className="btn btn-success">Go Back</Link>
                </Col>
            </Row>
            <Form>

                <Form.Group controlId="fname">
                    <Form.Label>First Name:</Form.Label>
                    <Row>
                        <Col xs={7} >
                            <Form.Control size="sm" placeholder="John" />
                        </Col>
                    </Row>

                </Form.Group>

                <Form.Group controlId="lname">
                    <Form.Label>Last Name:</Form.Label>
                    <Row>
                        <Col xs={7} >
                            <Form.Control size="sm" placeholder="Doe" />
                        </Col>
                    </Row>

                </Form.Group>

                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea className="form-control" id="description" rows="2"
                        placeholder='Enter your full Postal Address'></textarea>
                </div>

                <Form.Group controlId="country">
                    <Form.Label>Country:</Form.Label>
                    <Row>
                        <Col xs={8} >
                            <Form.Control size="sm" placeholder="India" />
                        </Col>
                    </Row>

                </Form.Group>

                <Form.Group controlId="emailId">
                    <Form.Label>Email ID:</Form.Label>
                    <Row>
                        <Col xs={7} >
                            <Form.Control size="sm" required type="email" placeholder="example@sample.com" />
                        </Col>
                    </Row>

                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>Phone Number:</Form.Label>
                    <Row>
                        <Col xs={2} md={1}> <Form.Control required size="sm" type="phone" placeholder="+91" /></Col>
                        <Col xs={5} md={6}> <Form.Control required size="sm" type="phone" placeholder="123456789" /></Col>
                    </Row>
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit Feedback
  </Button>
            </Form>
        </>
    )

}

export default FeedbackScreen;