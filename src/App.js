import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Client from './components/Client';
import Home from './components/Home';
import Room from './components/Room';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/clients/:id" component={Client} /> 
      <Route path="/rooms/:id" component={Room} /> 
    </Switch>
  );
}

export default App;
