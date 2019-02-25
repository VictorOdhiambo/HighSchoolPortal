import React, { Component } from 'react';
import '../src/bootstrap/css/bootstrap.min.css';
import '../src/bootstrap/css/customStyle.css';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import StudentPortal from './components/StudentPortal';
import Login from './components/Login';
import AccountsPortal from './components/AccountsPortal'
import Error from './components/Error'


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/studentPortal" component={StudentPortal}  />
          <Route path="/accounts" component={AccountsPortal} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
