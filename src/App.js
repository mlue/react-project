import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.count = 0;
    this.state = {
      items: [{
        name: "name",
        link: "link",
        key: this.count
      }]
    }
  }

  onClick(){
    this.setState({
      items: this.state.items.concat([{
        name: "name",
        link: "link",
        key: ++this.count
      }])
    })
  }



  render() {
    var listItems = this.state.items.map(function(item) {
      return (
        <li key={item.key}>
          <a href={item.link}>{item.name}</a>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <ul>
            {listItems}
          </ul>
          <p className="x" onClick={() => {this.onClick()}}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
