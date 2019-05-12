import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';



class Dogs extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/happy">Happy</Link>
            </li>
            <li>
              <Link to="/sleepy">Sleepy</Link>
            </li>
            <li>
              <Link to="/guilty">Guilty</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/happy" component={Happy} />
          <Route path="/Sleepy" component={Sleepy} />
          <Route path="/Guilty" component={Guilty} />
          <Route path="/" component={Home} />
        </div>
      </Router>

    )
  }
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}














ReactDOM.render(<Dogs />, document.getElementById('root'));
