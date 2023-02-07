import React from 'react';
import './Result.module.css';

// place to store numbers and operators until calculation happens
let operationArray = [];

// the top pane that displays recently clicked buttons and results of calculations
export class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayed: null, opArr: operationArray };
  }

  // set the initial value displayed in result pane
  componentDidMount() {
    operationArray = ["0"];
    this.setState({ displayed: "0", opArr: operationArray });
  }

  // determine what to display upon action
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      let currentDisplayed = this.state.displayed;
      let click = this.props.data.split(" ")[0];

      if (prevProps.data === "=" || prevProps.data === "AC" || prevProps.data === null) {
        // replace previous contents of result pane on new button click
        // or add a first click of "." after a "0"
        currentDisplayed = this.updateDisplay("0", click);
      } else {
        // update result pane normally
        currentDisplayed = this.updateDisplay(currentDisplayed, click);
      }

      this.setState({ displayed: currentDisplayed, opArr: operationArray });
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
      this.updateOperationArray(click);
    } else if (click === "=") {
      // on "=" button click, display result of calculation
      displayed = this.performCalculation();
    } else {
      // on number or "." click, update display and push to operator array
      if (displayed === "+" || displayed === "-" ||
        displayed === "*" || displayed === "÷") {
        displayed = click;
      } else { displayed += click; }
      this.updateOperationArray(click);
    }

    return displayed;
  }

  // update operation array on number, ".", "+", "-", "X", or "÷" clicks
  updateOperationArray(click) {
    let lastValue = operationArray[operationArray.length - 1];

    if ((click === "+" || click === "-" || click === "*" || click === "÷") ||
      (lastValue === "+" || lastValue === "-" || lastValue === "*" || lastValue === "÷")) {
      operationArray.push(click);
    } else {
      operationArray[operationArray.length - 1] += click;
    }
  }

  // handle "AC", "+/-", and "%" button clicks
  performMiscOperation(click) {
    let displayed = this.state.displayed;
    let output;

    if (click === "AC") {
      // on "AC" button click, set result to 0, clear operationArray
      output = 0;
      operationArray = ["0"];
    } else if (click === "+/-") {
      // on "+/-" button click, toggle "-"
      if (Number(displayed) > 0) {
        output = -Math.abs(Number(displayed));
        output = output.toString();
      } else if (Number(displayed) < 0) {
        output = Math.abs(Number(displayed));
        output = output.toString();
      }
      operationArray[operationArray.length - 1] = output;
    } else if (click === "%") {
      // on "%" button click, move two decimal places down
      output = parseFloat(displayed) * 0.01;
      operationArray[operationArray.length - 1] = output;
    }

    return output;
  }

  // handle "=" button click, perform the calculation
  // *** TODO ***
  performCalculation() {
    let result = 0;

    // *** placeholder lul ***
    result = 42;
    operationArray = ["0"];
    return result;
  }

  render() {
    return (
      <div>{this.state.displayed}</div>
    );
  }
}