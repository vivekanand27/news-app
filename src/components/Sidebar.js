import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'

import "../App.css";

function Sidebar() {
   
    useEffect(() => {
       
    }, [])

    
        return (
           <Row>
               <Col >
             Hi
               </Col>
               <Col xs={12}>
               <button>We are listening</button>
               </Col>
           </Row>
                
         
        )
  

}

export default Sidebar;