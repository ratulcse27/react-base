import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import {BrowserRouter,Route,Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <h2>Vivacom</h2>
              <Link to="/">Home</Link>
            </div>
            <div className="container">
              <Route exactly pattern="/" component={Home} />
              <Route path="/movies/:movieId" component={Movie}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
