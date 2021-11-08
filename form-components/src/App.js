import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-dom';

import MasterForm2 from './components/test';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/MasterForm2' component={MasterForm2} />
              
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
