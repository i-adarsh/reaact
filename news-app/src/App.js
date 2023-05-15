import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'John';
  render() {
    return (
      <div>
        Hello My First Class based Component {this.c}
      </div>
    )
  }
}

