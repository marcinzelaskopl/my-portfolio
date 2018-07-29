import React, { Component } from 'react';
import './App.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import Nav from "./components/Nav";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
        <HashRouter>
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Main}/>
        </Switch>
      </div>
        </HashRouter>
    );
  }
}

export default App;
