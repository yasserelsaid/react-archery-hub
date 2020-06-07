import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import FAQs from './containers/FAQs/FAQs';
import Contact from './containers/Contact/Contact';
import JoiningInfo from './containers/JoiningInfo/JoiningInfo';
import Reserve from './containers/Reserve/Reserve';
import AdminLogin from './containers/AdminLogin/AdminLogin';

import './App.css';

function App(props) {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/faqs' exact component={FAQs} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/info' exact component={JoiningInfo} />
        <Route path='/book' exact component={Reserve} />
        <Route path='/admin-login' exact component={AdminLogin} />
      </Switch>
    </div>
  );
}

export default App;
