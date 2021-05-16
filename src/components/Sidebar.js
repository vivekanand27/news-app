import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'

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
               <Col >
             Hi
               </Col>
               <Col xs={12}>
               <button onClick={showFeedbackFunction()}>We are listening</button>
               </Col>
           </Row>
                
         
        )
  

}

export default Sidebar;