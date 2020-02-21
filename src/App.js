import React,{useState} from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';

import './css/App.css';

import { Provider } from './contexts/tmdbContext';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  let initState = {
    term:'',
    isLoading:true,
    movies:[],
    error:null
  };

  let [state,setState] = useState(initState);
  let store ={
    state:state,
    setState:setState
  };

  return (
    <div className="App">
      <Provider value={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={MovieDetail}/>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
