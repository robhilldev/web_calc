import React from 'react';
import './Result.module.css';

// place to store numbers and operators until calculation happens
let operationArray = [];

// the top pane that displays recently clicked buttons and results of calculations
export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayed: null };
  }

  // set the initial value displayed in result pane
  componentDidMount() {
    this.setState({ displayed: 0 });
  }

  // determine what to display upon action
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      let currentDisplayed = this.state.displayed;
      let click = this.props.data;

      if (click === "AC" || click === "negative" || click === "+/-" || click === "%") {
        // on "AC", "+/-", or "%" button clicks, modify value based on operator
        currentDisplayed = this.performMiscOperation(click);
      } else if (click === "+" || click === "-" || click === "*" || click === "÷" || click === ".") {
        // on operator click, updated displayed, push to operator array
        currentDisplayed += click;
        operationArray.push(click);
      } else if (click === "=") {
        // on "=" button click, display result of calculation
        currentDisplayed = this.performCalculation();
      } else {
        // on number click, update displayed value and push to operator array
        if (this.state.displayed === 0) { currentDisplayed = click; }
        else { currentDisplayed += click; }
        operationArray.push(parseInt(click));
      }

      this.setState({ displayed: currentDisplayed });
    }
  }

  // handle "AC", "+/-", and "%" button clicks
  performMiscOperation(click) {
    let displayed = this.state.displayed;
    let output;

    if (click === "AC") {
      // on "AC" button click, set result to 0
      output = 0;
      operationArray = [];
    } else if ((click === "negative" || click === "+/-") && displayed > 0) {
      // on "+/-" button click, flip result from positive to negative
      output = -Math.abs(displayed);
      operationArray[operationArray.length - 1] = output;
    } else if ((click === "negative" || click === "+/-") && displayed < 0) {
      // on "+/-" button click, flip result from negative to positive
      output = Math.abs(displayed);
      operationArray[operationArray.length - 1] = output;
    } else if (click === "%") {
      // on "%" button click, move two decimal places down
      // VVV TODO - continue moving decimal place after first click VVV
      output = displayed * 0.01;
      operationArray[operationArray.length - 1] = output;
    }

    return output;
  }

  // handle "=" button click, perform the calculation
  // VVV TODO VVV
  performCalculation() {
    let result = operationArray;
    operationArray = [];
    // placeholder lul
    result = 42;
    return result;
  }

  render() {
    return (
      <div>{this.state.displayed}</div>
    );
  }
}