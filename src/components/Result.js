import React from 'react';
import './Result.module.css';

export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ value: this.props.data });
    }
  }

  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}