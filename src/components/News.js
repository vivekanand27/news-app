import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
   
    return (
        <Card>           
                <Card.Img src={news.image} variant="top" alt="Image Not Available" />          
            <Card.Body>
                <Link to={`/product/${news.title}`}>
                    <Card.Title as='div'>
                        <strong>{news.title}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    
                </Card.Text>

                <Card.Text>
                    <div>
                        <div>{news.published}</div>
                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default News

