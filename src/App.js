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
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
        <HashRouter>
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
        </HashRouter>
    );
  }
}

export default App;
