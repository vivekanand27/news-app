import React,{lazy, Suspense} from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const FeedbackScreen = lazy(() => import("./screens/FeedbackScreen"));

const App = () => {
  return(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Header /> */}
      <main className="py-2">
        <Container>       
          <Route path='/feedback' component={FeedbackScreen}/>   
          <Route path='/' component={HomeScreen} exact/>     
        </Container>
      </main>      
      </Suspense>
    </Router>);
}

export default App;
