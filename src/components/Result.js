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
    this.setState({ value: "0" });
  }

  // determine what to display upon action
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      let currentResult = this.state.value;

      if (this.props.data === "AC") {
        // on "AC" button click, set result to 0
        currentResult = 0;
      } else if (this.props.data === "+/-") {
        // on "+/-" button click, flip result from negative to positive
        currentResult = Math.abs(this.state.value);
      } else if (this.props.data === "flipped") {
        // on "+/-" button click, flip result from positive to negative
        currentResult = -Math.abs(this.state.value);
      } else {
        // on "=" button click, produce result of calculation
        currentResult = this.performCalculation(this.props.data);
      }

      this.setState({ value: currentResult });
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