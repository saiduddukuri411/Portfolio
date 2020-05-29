import React from 'react';
import Header from './pages/header/frame';
import Home from './pages/Home/frame'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Footer from './pages/Footer/frame';
import Work from './pages/Work/frame';
import Project from './pages/Projects/frame';
import Resume from './pages/Resume/frame';


function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
       <Route path="/work" component={Work} exact={true} />
       <Route path="/resume" component={Resume} exact={true} />
       <Route path="/projects" component={Project} exact={true} />
       <Route path="/" component={Home} exact={true} />
       <Redirect to="/" />
       </Switch>
       <Footer />
       </Router>
    </div>
  );
}

export default App;
