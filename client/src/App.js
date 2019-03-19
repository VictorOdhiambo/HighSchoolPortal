import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdminPortal from '../src/components/admin/AdminPortal'
import StudentPortal from './components/student/StudentPortal';
import AccountPortal from './components/accounts/AccountPortal';
import TeachersPortal from './components/teachers/TeachersPortal';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route exact path="/admin" component={AdminPortal} />
          <Route exact path="/studentportal" component={StudentPortal} />
          <Route exact path="/teacherportal" component={TeachersPortal} />
          <Route exact path="/accountportal" component={AccountPortal} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
