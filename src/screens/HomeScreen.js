import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'

import "../App.css";
import News from '../components/News'
import Sidebar from '../components/Sidebar'
import FeedbackScreen from '../screens/FeedbackScreen'

function HomeScreen() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let showFeedback = false; // make it true to view feedback form

    useEffect(() => {        
        fetch("https://api.first.org/data/v1/news")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
           <Row style={{height:"100%", position:"relative"}}>
               <Col xs={3} className="sidebar-container">
                    <Sidebar />
               </Col>

                { showFeedback === true
                    ? <div className="feedback-container">
                        <FeedbackScreen />
                      </div>
                    : <></>
                }
               
               <Col xs={9} className="main-container">
                   <Row>
                        {items.map(item => (
                            <Col xs={4} sm={4} md={4} lg={4} xl={3}>
                                <li key={item.id}>
                                    <News news={item} />
                                </li>
                            </Col>
                        ))}
                   </Row>
               </Col>
               
           </Row>
                
         
        );
    }

}

export default HomeScreen;