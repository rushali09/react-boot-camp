import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return <div style={{ textAlign: 'center' }}>
      <h1>List Of Cars</h1>
      <Cars color="black" />
    </div>
  }
}

export class Cars extends React.Component {
  render() {
    return <div>
      {/* color: <div style={{ height: '50px', width: '50px', borderRadius: '15px', backgroundColor: this.props.color }} /> */}
  <li>Audi: {this.props.color}</li>
      <li>BMW</li>
      <li>Ferrari</li>
      <li>Maruti</li>
    </div>
  }
}
