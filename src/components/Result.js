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
  // *** TODO - move display logic out to an updateDisplay method ***
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      let currentDisplayed = this.state.displayed;
      let click = this.props.data;

      currentDisplayed = this.updateDisplay(currentDisplayed, click);
      this.setState({ displayed: currentDisplayed });
    }
  }

  // update value shown in results pane, and push to operator array on some clicks
  updateDisplay(currentDisplayed, click) {
    let displayed = currentDisplayed;

    if (click === "AC" || click === "negative" || click === "+/-" || click === "%") {
      // on "AC", "+/-", or "%" button clicks, modify value based on operator
      displayed = this.performMiscOperation(click);
    } else if (click === "+" || click === "-" || click === "*" || click === "÷") {
      // on operator click, update display and push to operator array
      displayed = click;
      operationArray.push(click);
    } else if (click === "=") {
      // on "=" button click, display result of calculation
      displayed = this.performCalculation();
    } else {
      // on number click, update display and push to operator array
      // don't parse operators as integers
      if (displayed === 0 || displayed === "+" || displayed === "-" ||
        displayed === "*" || currentDisplayed === "÷") {
        displayed = click;
      }
      else { displayed += click; }
      // don't parse "." as an integer
      if (click === ".") { operationArray.push(click); }
      //parse numbers as integers
      else { operationArray.push(parseInt(click)); }
    }

    return displayed;
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
      // *** TODO - continue moving decimal place after first click ***
      output = displayed * 0.01;
      operationArray[operationArray.length - 1] = output;
    }

    return output;
  }

  // handle "=" button click, perform the calculation
  // *** TODO ***
  performCalculation() {
    let result = operationArray;
    operationArray = [];
    // *** placeholder lul ***
    result = 42;
    return result;
  }

  render() {
    return (
      <div>{this.state.displayed}</div>
    );
  }
}