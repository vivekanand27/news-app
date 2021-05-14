import React, { useState, useEffect } from "react";
import { Card, Button, Col } from 'react-bootstrap'

import "../App.css";
import News from '../components/News'
const api = "https://api.first.org/data/v1/news";

function HomeScreen() {
    const [news, setNews] = useState({});

    useEffect(() => {
        getGiHubUserWithAxios();
    }, []);

    const getGiHubUserWithAxios = async () => {
        // const response = await axios.get(api);
        // setNews(response.data);

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                setNews(data.data);
            })

        console.log(news)

    };

    return (
        <>
            {news.length === 0 ?
                <div className="no-product-matching">No news available</div>
                : news.map(n => (
                    <Col key={n.id} xs={6} sm={6} md={6} lg={4} xl={3}>
                        <News news={n} />
                    </Col>
                ))}

        </>
    );
}

export default HomeScreen;