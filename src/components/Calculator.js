import React from 'react';
import { Result } from './Result';
import './Calculator.module.css';

// the bottom pane containing all of the buttons
export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastClicked: null };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newClick;

    if (e.target.className !== "+/-") {
      // handle all clicks except for "+/- button"
      newClick = e.target.className;
    } else {
      //handle "+/-" button clicks
      if (e.target.className === "+/-" && this.state.lastClicked !== "negative") {
        newClick = e.target.id;
      } else if (e.target.className === "+/-" && this.state.lastClicked === "negative") {
        newClick = e.target.className;
      }
    }

    this.setState({ lastClicked: newClick });
  }

  render() {
    return (
      <table cellPadding={0}>
        <thead>
          <tr>
            <th><Result data={this.state.lastClicked} /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="AC" onClick={this.handleClick}>AC</button></td>
            <td>
              <button className="+/-" id="negative" onClick={this.handleClick}>+/-</button>
            </td>
            <td><button className="%" onClick={this.handleClick}>%</button></td>
            <td><button className="÷" onClick={this.handleClick}>÷</button></td>
          </tr>
          <tr>
            <td><button className="7" onClick={this.handleClick}>7</button></td>
            <td><button className="8" onClick={this.handleClick}>8</button></td>
            <td><button className="9" onClick={this.handleClick}>9</button></td>
            <td><button className="X" onClick={this.handleClick}>X</button></td>
          </tr>
          <tr>
            <td><button className="4" onClick={this.handleClick}>4</button></td>
            <td><button className="5" onClick={this.handleClick}>5</button></td>
            <td><button className="6" onClick={this.handleClick}>6</button></td>
            <td><button className="-" onClick={this.handleClick}>-</button></td>
          </tr>
          <tr>
            <td><button className="1" onClick={this.handleClick}>1</button></td>
            <td><button className="2" onClick={this.handleClick}>2</button></td>
            <td><button className="3" onClick={this.handleClick}>3</button></td>
            <td><button className="+" onClick={this.handleClick}>+</button></td>
          </tr>
          <tr>
            <td colSpan={2}><button className="0" onClick={this.handleClick}>0</button></td>
            <td><button className="." onClick={this.handleClick}>.</button></td>
            <td><button className="=" onClick={this.handleClick}>=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}