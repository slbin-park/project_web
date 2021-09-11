import './App.css';

import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Mainpage from './component/main'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route paht='/mainpage' component={Mainpage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
