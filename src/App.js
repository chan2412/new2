import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from "./components/Contact";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/new2" component={Home} ></Route>
            <Route path="/new2/About" component={About} ></Route>
            <Route path="/new2/Contact" component={Contact}></Route>
          </Switch>
        </div> 
      </Router>
    )
  }
}
export default App;