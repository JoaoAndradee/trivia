import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Config from './pages/Config';
import Game from './pages/Game';
import Login from './pages/Login';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ Game } />
      <Route path="/settings" component={ Config } />
      <Route path="/feedback" component={ Feedback } />
    </Switch>
  );
}
