import React from 'react';
import './Result.module.css';

// the top pane that displays recently clicked buttons and results of calculations
export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  // set the initial value displayed in result pane
  componentDidMount() {
    this.setState({ value: 0 });
  }

  // determine what to display upon action
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      if (this.props.data === "AC") {
        // set result to 0 on "AC" button click
        this.setState({ value: 0 });
      } else {
        this.setState({ value: this.performCalculation(this.props.data) });
      }
    }
  }

  // perform the calculation
  // VVV TODO VVV
  performCalculation(input) {
    return input;
  }

  render() {
    return (
      <div>{this.state.value}</div>
    );
  }
}