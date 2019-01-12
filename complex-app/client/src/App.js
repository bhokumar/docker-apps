import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className = "App-header">
        <Link to = "/">Home</Link>
        <Link to = "/otherpage">OtherPage</Link>
      </header>
        <BrowserRouter>
          <div>
              <Route path = "/" component = {Fib}/>
              <Route path = "/otherpage" component = {OtherPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
