import React from 'react';
import './App.css';
import Nav from './Nav';
import News from './News'
import Weather from './Weather'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/" exact component={Weather}/>
            <Route path="/News" component={News}/>
          </Switch>
      </div>
    </Router>
  );
}



export default App;
