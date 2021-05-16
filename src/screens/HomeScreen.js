import React, { useState, useEffect } from "react";
import { Col } from 'react-bootstrap'
import axios from 'axios'

import "../App.css";
import News from '../components/News'
const api = "https://api.first.org/data/v1/news";

function HomeScreen() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        debugger
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
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <News news={item} />
                    </li>
                ))}
            </ul>
        );
    }

}

export default HomeScreen;