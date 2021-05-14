import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

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
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
      
       {JSON.stringify(news)}
      </div>
    </div>
  );
}

export default HomeScreen;