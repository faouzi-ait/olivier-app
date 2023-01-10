import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Meal from './pages/Meal';
import Search from './pages/Search';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meal" component={Meal} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
