import React from 'react';
import './Result.module.css';

export class Result extends React.Component {
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}