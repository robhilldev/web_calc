import React from 'react';
import './Result.module.css';

export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  render() {
    return (
      <div>{this.state.value}</div>
    );
  }
}