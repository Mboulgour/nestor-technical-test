import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Client from './components/Client'
import Home from './components/Home';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/clients/:id" component={Client} /> 
    </Switch>
  );
}

export default App;
