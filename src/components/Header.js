import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1><span style={{ fontWeight: 200 }}>olo</span>(<span style={{ fontWeight: 200 }}>gy</span>) <span style={{ fontWeight: 200 }}>whiz</span></h1>
        </header>
      </div>
    );
  }
}

export default Header;
