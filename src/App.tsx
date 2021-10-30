import React from 'react';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/search' component={SearchPage}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
  );
}

export default App;
