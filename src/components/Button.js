import React from 'react';
import './Button.module.css';

export class Button extends React.Component {
  render() {
    return (
      <button className={this.props.name}>
        {this.props.label}
      </button>
    );
  }
}