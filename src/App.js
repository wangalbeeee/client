import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title : 'loading'
  }

  componentDidMount () {
    fetch('http://127.0.0.1:8080/').then(
      response => response.json() 
    ).then(response => this.setState({title : response.data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.title}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
