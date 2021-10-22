import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Mvp from './pages/Mvp';
import Tenants from './pages/Tenants';

function App() {
  const [ data, setData] = useState([]);
  
  useEffect( () => {
    ( async () => {
    
    })();
  }, [])

  return <Router>
    <Switch>
      <Route exact path="/">
        <Mvp />
      </Route>
      <Route path="/tenants">
        <Tenants/>
      </Route>
      <Route>
        URL no conocida
      </Route>
    </Switch>
  </Router>;
}

export default App;
