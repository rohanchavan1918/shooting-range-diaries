import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
    <div className="App">
      {/* Nav between signup and register
        app.rangediaries.com/signup
        app.rangediaries.com/signin
        
      */}
      <Route path="/" exact component={Login} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
