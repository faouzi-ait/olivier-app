import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Contact from './Contact';
import Message from './Message';
import Search from './Search';

import './App.css';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
