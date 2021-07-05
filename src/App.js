import './App.css';
import React from "react";
import Header from './Component/Home/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Component/Home/LogIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
