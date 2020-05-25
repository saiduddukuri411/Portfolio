import React from 'react';
import Header from './pages/header/frame';
import Home from './pages/Home/frame'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Footer from './pages/Footer/frame';


function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
       <Route path="/" component={Home} exact={true} />
       <Redirect to="/" />
       </Switch>
       <Footer />
       </Router>
    </div>
  );
}

export default App;
