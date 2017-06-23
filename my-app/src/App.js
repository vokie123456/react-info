import React, { Component } from 'react';
import HomeNav  from './components/common/homeNav';
import HomeFooter  from './components/common/homeFooter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <HomeNav/>
        {this.props.children}
        <HomeFooter/>
      </div>
    );
  }
}

export default App;
