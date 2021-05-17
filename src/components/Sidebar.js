import React, { useEffect } from "react";
import { Row, Col, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import "../App.css";

function Sidebar() {

    let showFeedback = false;
   
    useEffect(() => {

    }, [])

    const showFeedbackFunction = () => {
        showFeedback = !showFeedback;
    }


    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={4}><Image src="/modi.jpg" alt="image" fluid roundedCircle /></Col>
                            <Col xs={8}> <Card.Text as='div'>
                                <h6>Hi Reader,</h6>
                            </Card.Text>
                                <Card.Text>
                                    <div>
                                        <div>Here's your news</div>
                                    </div>
                                </Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12} className="py-4">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={12}> <Card.Text as='div'>
                                <center><h5>View Toggle</h5></center>
                            </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>


            <Col xs={12} className="py-2">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs={12}>
                                <Card.Text as='div'>
                                    <center><h5>Have a Feedback?</h5></center>
                                </Card.Text>
                            </Col>
                            <Col className="py-3">
                            <center>
                            <Link to="/feedback" className="btn btn-success">We are listening</Link>
                                {/* <Button variant="success" onClick={showFeedbackFunction()}>We are listening</Button> */}
                            </center>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={12}>

            </Col>
        </Row>


    )


}

export default Sidebar;