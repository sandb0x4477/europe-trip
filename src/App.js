import React, { Component } from 'react';
import Countdown from './Countdown';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <h3 className="title">
          Europe Trip is coming soon:
        </h3>
        <Countdown date={`${year}-04-12`} />
      </div>
    );
  }
}

export default App;
