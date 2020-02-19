import React from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';

import './css/App.css';

import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <div className="root">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={MovieDetail}/>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
