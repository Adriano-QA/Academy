import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';
import Password from '../pages/password';
import Dashboard from '../pages/dashboard';



const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/password' component={Password} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch> 
  )
}

export default Routes;