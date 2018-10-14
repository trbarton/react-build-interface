import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import BuildsPage from '../pages/BuildsPage';
import RunningBuildsPage from '../pages/RunningBuildsPage';
import NewBuildPage from '../pages/NewBuildPage';
import SplashPage from '../pages/SplashPage';

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  appWithPersistentNav = () => (props) => (
    <App
      onNavResize={this.onNavResize}
      {...props}
    />
  )

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={this.appWithPersistentNav()}>
          <Route path="/" component={SplashPage} />
          <Route path="/builds" component={BuildsPage} />
          <Route path="/runningbuilds" component={RunningBuildsPage} />
          <Route path="/newbuild" component={NewBuildPage} />
        </Route>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
