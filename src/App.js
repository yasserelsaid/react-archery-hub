import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import FAQs from './containers/FAQs/FAQs';
import Contact from './containers/Contact/Contact';
import JoiningInfo from './containers/JoiningInfo/JoiningInfo';
import Reserve from './containers/Reserve/Reserve';
import AdminLogin from './containers/AdminLogin/AdminLogin';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionTypes from './store/actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate > new Date()) {
        this.props.onAuthSuccess(token, localStorage.getItem('userId'));
        const expiresIn = expirationDate - new Date();
        setTimeout(() => {
          this.props.onLogout();
        }, expiresIn);
      } else {
        this.props.onLogout();
      }
    } else {
      this.props.onLogout();
    }
  }

  render() {
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
          <Route path='/admin-panel' exact component={AdminPanel} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSuccess: (token, userId) =>
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId,
      }),
    onLogout: () =>
      dispatch({
        type: actionTypes.AUTH_LOGOUT,
      }),
  };
};
export default withRouter(connect(null, mapDispatchToProps)(App));
