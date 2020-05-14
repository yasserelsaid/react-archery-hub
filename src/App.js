import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import FAQs from './containers/FAQs/FAQs';
import Contact from './containers/Contact/Contact';
import JoinNow from './containers/JoinNow/JoinNow';

import './App.css';

function App(props) {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/faqs' exact component={FAQs} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/join' exact component={JoinNow} />
      </Switch>
    </div>
  );
}

export default App;
